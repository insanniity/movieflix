package com.devsuperior.movieflix.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.services.ReviewService;
import com.devsuperior.movieflix.services.exceptions.ForbiddenException;

@RestController
@RequestMapping(value = "/reviews")
public class ReviewResource {
	
	@Autowired
	private ReviewService service;
	
	@GetMapping
	public ResponseEntity<Page<ReviewDTO>> findAllPaged(			
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "movieId", defaultValue = "0") Long movieId,
			@RequestParam(value = "linesPerPage", defaultValue = "10") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction
		){
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);		
		Page<ReviewDTO> list = service.findAllPaged(pageRequest, movieId);		
		return ResponseEntity.ok().body(list);		
	}	
	
	@PostMapping
	public ResponseEntity <ReviewDTO> insert(@Valid @RequestBody ReviewDTO dto){
		try{
			if(validarPreenchimento(dto.getText())) {
				return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(null);
			}
			dto = service.insert(dto);
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto).toUri();			
			return ResponseEntity.created(uri).body(dto);
		}catch (ForbiddenException e) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
		}	
	}
	
	private Boolean validarPreenchimento(String string) {        
        if (string == null) {
            return true;
        }        
        if (string.isEmpty()) {
        	return true;
        }        
        if (string.trim().isEmpty()) {
        	return true;
        }
        
        return false;
    }
	
}

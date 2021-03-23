package com.devsuperior.movieflix.services;

import java.io.Serializable;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exceptions.DataBaseException;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MovieRepository movieRepository;		
	
	@Autowired
	private AuthService authService;
	
	@Transactional(readOnly = true)
	public Page<ReviewDTO> findAllPaged(PageRequest pageRequest){
		Page<Review> list = repository.findAll(pageRequest);		
		return list.map(x -> new ReviewDTO(x));		
		
	}
	
	@Transactional(readOnly = true)
	public ReviewDTO findById(Long id) {		
		Optional<Review> obj = repository.findById(id);
		Review entity = obj.orElseThrow(() -> new ResourceNotFoundException("Review não encontrada"));
		return new ReviewDTO(entity);
		
	}
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Movie movie = movieRepository.getOne(dto.getMovieId());
		User user = authService.authenticated();
		authService.validateMember();		
		Review review = new Review(null, dto.getText(), movie, user);
		review = repository.save(review);
		return new ReviewDTO(review);
	}
	
	@Transactional
	public ReviewDTO update(Long id, ReviewDTO dto) {
		try{
			Review entity = repository.getOne(id);		
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new ReviewDTO(entity);
		}catch(EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id nao encontrado.");
		}		
	}
	

	private void copyDtoToEntity(ReviewDTO dto, Review entity) {
		entity.setMovie(movieRepository.getOne(dto.getMovieId()));
		entity.setText(dto.getText());
		entity.setUser(userRepository.getOne(dto.getUser().getId()));
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id nao encontrado.");
		}catch(DataIntegrityViolationException e) {
			throw new DataBaseException("Violação de integridade.");
		}
		
	}
	
}

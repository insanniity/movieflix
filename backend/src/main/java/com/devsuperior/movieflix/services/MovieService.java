package com.devsuperior.movieflix.services;

import java.io.Serializable;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.DataBaseException;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private MovieRepository repository;	
	
	@Autowired
	private GenreRepository genreRepository;	
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(PageRequest pageRequest){
		Page<Movie> list = repository.findAll(pageRequest);		
		return list.map(x -> new MovieDTO(x));		
		
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {		
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrada"));
		return new MovieDTO(entity);
		
	}
	
	@Transactional
	public MovieDTO insert(MovieDTO dto) {
		Movie entity = new Movie();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		
		return new MovieDTO(entity);
		
	}
	
	@Transactional
	public MovieDTO update(Long id, MovieDTO dto) {
		try{
			Movie entity = repository.getOne(id);		
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new MovieDTO(entity);
		}catch(EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id nao encontrado.");
		}		
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
	
	public void copyDtoToEntity(MovieDTO dto, Movie entity) {
		entity.setTitle(dto.getTitle());
		entity.setSubTitle(dto.getSubTitle());
		entity.setYear(dto.getYear());
		entity.setImgUrl(dto.getImgUrl());
		entity.setSynopsis(dto.getSynopsis());
		Genre genre = genreRepository.getOne(dto.getGenre().getId());
		entity.setGenre(genre);
		
	}
	
}

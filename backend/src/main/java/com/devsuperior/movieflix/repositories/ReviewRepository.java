package com.devsuperior.movieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;

public interface ReviewRepository  extends JpaRepository<Review, Long>{	
	
	@Query("SELECT obj FROM Review obj WHERE "
			+ "(:movie IS NULL OR obj.movie = :movie)")
	Page<Review> find(Movie movie, Pageable pageable);
}

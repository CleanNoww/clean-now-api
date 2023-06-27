package com.cleannoww.cleannowapi.repository;

import com.cleannoww.cleannowapi.domain.Evaluacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvaluacionRepository extends JpaRepository<Evaluacion, Integer> {
}
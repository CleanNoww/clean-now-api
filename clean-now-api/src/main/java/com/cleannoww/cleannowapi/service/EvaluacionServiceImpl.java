package com.cleannoww.cleannowapi.service;

import com.cleannoww.cleannowapi.domain.Evaluacion;
import com.cleannoww.cleannowapi.repository.EvaluacionRepository;
import org.springframework.stereotype.Service;

@Service
public class EvaluacionServiceImpl implements EvaluacionService{
    private final EvaluacionRepository evaluacionRepository;

    public EvaluacionServiceImpl(EvaluacionRepository evaluacionRepository) {
        this.evaluacionRepository = evaluacionRepository;
    }

    @Override
    public Evaluacion create(Evaluacion evaluacion) {
        return evaluacionRepository.save(evaluacion);
    }
}

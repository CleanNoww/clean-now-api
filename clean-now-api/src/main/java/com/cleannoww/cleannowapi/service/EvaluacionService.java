package com.cleannoww.cleannowapi.service;
import org.springframework.http.HttpStatus;
import com.cleannoww.cleannowapi.domain.Evaluacion;

public interface EvaluacionService {
    Evaluacion createEvaluacion(Evaluacion evaluacion);
}

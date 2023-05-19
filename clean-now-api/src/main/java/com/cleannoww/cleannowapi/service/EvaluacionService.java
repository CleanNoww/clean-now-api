package com.cleannoww.cleannowapi.service;
import com.cleannoww.cleannowapi.domain.Evaluacion;
import java.util.List;
import java.util.Optional;

public interface EvaluacionService {
    Evaluacion createEvaluacion(Evaluacion evaluacion);
    List<Evaluacion> getAllEvaluaciones();
    Evaluacion updateEvaluacion(Evaluacion evaluacion);

    Evaluacion getEvaluacionById(int id);
    void deleteEvaluacion(int id);

}
package com.cleannoww.cleannowapi.service;
import org.springframework.http.HttpStatus;
import com.cleannoww.cleannowapi.domain.Evaluacion;
import java.util.List;
public interface EvaluacionService {
    /*Hacer evaluaciones*/
    Evaluacion createEvaluacion(Evaluacion evaluacion);
    /*Historial de evaluaciones y Evaluaciones de un limpiador*/
    List<Evaluacion> getAllEvaluaciones();
    /* */
    Evaluacion updateEvaluacion(Evaluacion evaluacion);

    Evaluacion getEvaluacionById(int id);

}

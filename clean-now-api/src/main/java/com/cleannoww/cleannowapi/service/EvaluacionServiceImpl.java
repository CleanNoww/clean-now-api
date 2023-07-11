package com.cleannoww.cleannowapi.service;
import com.cleannoww.cleannowapi.domain.Evaluacion;
import com.cleannoww.cleannowapi.repository.EvaluacionRepository;
import org.springframework.stereotype.Service;
import java.util.Optional;

import java.util.List;

@Service
public class EvaluacionServiceImpl implements EvaluacionService{
    private final EvaluacionRepository evaluacionRepository;

    public EvaluacionServiceImpl(EvaluacionRepository evaluacionRepository) {
        this.evaluacionRepository = evaluacionRepository;
    }

    @Override
    public Evaluacion createEvaluacion(Evaluacion evaluacion) {

        return evaluacionRepository.save(evaluacion);
    }

    @Override
    public List<Evaluacion> getAllEvaluaciones() {
        return evaluacionRepository.findAll();
    }

    @Override
    public Evaluacion updateEvaluacion(Evaluacion evaluacion) {
        Evaluacion evaluacionExistente = evaluacionRepository.findById(evaluacion.getId_evaluacion()).orElse(null);

        if (evaluacionExistente != null) {
            evaluacionExistente.setCalificacion(evaluacion.getCalificacion());
            evaluacionExistente.setComentario(evaluacion.getComentario());

            return evaluacionRepository.save(evaluacionExistente);
        }

        return null;
    }

    @Override
    public Evaluacion getEvaluacionById(int id) {
        Optional<Evaluacion> evaluacionOptional = evaluacionRepository.findById(id);
        return evaluacionOptional.orElse(null);
    }
    @Override
    public void deleteEvaluacion(int id) {
        evaluacionRepository.deleteById(id);
    }

    /*@Override
    public List<Evaluacion> getAllEvaluaciones() {

        return List<Evaluacion>;
    }*/

}
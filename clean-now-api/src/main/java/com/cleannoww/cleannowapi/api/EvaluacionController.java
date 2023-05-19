package com.cleannoww.cleannowapi.api;
import com.cleannoww.cleannowapi.domain.Evaluacion;
import com.cleannoww.cleannowapi.service.EvaluacionService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/evaluaciones")
public class EvaluacionController {
    private final EvaluacionService evaluacionService;
    public EvaluacionController(EvaluacionService evaluacionService) {
        this.evaluacionService = evaluacionService;
    }
    @GetMapping
    public ResponseEntity<List<Evaluacion>> getAllEvaluaciones(){
        return new ResponseEntity<List<Evaluacion>>(evaluacionService.getAllEvaluaciones(),HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Evaluacion> addEvaluacion(@RequestBody Evaluacion evaluacion){
        return new ResponseEntity<Evaluacion>(evaluacionService.createEvaluacion(evaluacion),HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Evaluacion> updateEvaluacion(@PathVariable int id, @RequestBody Evaluacion evaluacion) {
        evaluacion.setId_evaluacion(id); // Establecer el ID proporcionado en el objeto Evaluacion

        Evaluacion evaluacionActualizada = evaluacionService.updateEvaluacion(evaluacion);

        if (evaluacionActualizada != null) {
            return new ResponseEntity<>(evaluacionActualizada, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvaluacion(@PathVariable int id) {
        evaluacionService.deleteEvaluacion(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
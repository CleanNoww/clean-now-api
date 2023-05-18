package com.cleannoww.cleannowapi.api;
import com.cleannoww.cleannowapi.domain.Evaluacion;
import com.cleannoww.cleannowapi.service.EvaluacionService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("api/v1/evaluaciones")
public class EvaluacionController {
    private final EvaluacionService evaluacionService;
    public EvaluacionController(EvaluacionService evaluacionService) {
        this.evaluacionService = evaluacionService;
    }
    @PostMapping
    public ResponseEntity<Evaluacion> addEvaluacion(@RequestBody Evaluacion evaluacion){
        return new ResponseEntity<Evaluacion>(evaluacionService.createEvaluacion(evaluacion),HttpStatus.CREATED);
    }

}

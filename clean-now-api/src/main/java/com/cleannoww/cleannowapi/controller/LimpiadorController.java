package com.cleannoww.cleannowapi.controller;
import com.cleannoww.cleannowapi.domain.Limpiador;
import com.cleannoww.cleannowapi.domain.LimpiadorSearchCriteria;
import com.cleannoww.cleannowapi.service.LimpiadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/limpiadores2")
public class LimpiadorController {
    private final LimpiadorService limpiadorService;

    @Autowired
    public LimpiadorController(LimpiadorService limpiadorService) {
        this.limpiadorService = limpiadorService;
    }

    @GetMapping("/buscar")
    public List<Limpiador> buscarLimpiadores(
            @RequestParam(required = false) String nombre,
            @RequestParam(required = false) Float calificacionMin,
            @RequestParam(required = false) Float calificacionMax,
            @RequestParam(required = false) Integer numServiciosMin,
            @RequestParam(required = false) Integer numServiciosMax,
            @RequestParam(required = false) Integer edadMin,
            @RequestParam(required = false) Integer edadMax,
            @RequestParam(required = false) List<String> tiposLimpieza
    ) {
        LimpiadorSearchCriteria criteria = new LimpiadorSearchCriteria();
        criteria.setNombre(nombre);
        criteria.setCalificacionMin(calificacionMin);
        criteria.setCalificacionMax(calificacionMax);
        criteria.setNumServiciosMin(numServiciosMin);
        criteria.setNumServiciosMax(numServiciosMax);
        criteria.setEdadMin(edadMin);
        criteria.setEdadMax(edadMax);
        criteria.setTiposLimpieza(tiposLimpieza);

        return limpiadorService.buscarLimpiadores(criteria);
    }
}
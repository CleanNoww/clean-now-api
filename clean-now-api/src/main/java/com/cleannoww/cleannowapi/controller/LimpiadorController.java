package com.cleannoww.cleannowapi.controller;
import com.cleannoww.cleannowapi.domain.Limpiador;
import com.cleannoww.cleannowapi.service.LimpiadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/limpiadores")
public class LimpiadorController {
    private final LimpiadorService limpiadorService;

    @Autowired
    public LimpiadorController(LimpiadorService limpiadorService) {
        this.limpiadorService = limpiadorService;
    }

    @GetMapping
    public List<Limpiador> buscarLimpiadores(@RequestParam(required = false) String nombre,
                                             @RequestParam(required = false) Float calificacion,
                                             @RequestParam(required = false) Integer numServicios,
                                             @RequestParam(required = false) Integer edadMin,
                                             @RequestParam(required = false) Integer edadMax,
                                             @RequestParam(required = false) List<String> tiposLimpieza) {
        if (nombre != null) {
            return limpiadorService.buscarConFiltros(nombre, calificacion, numServicios, edadMin, edadMax, tiposLimpieza);
        } else {
            return limpiadorService.buscarConFiltros(null, calificacion, numServicios, edadMin, edadMax, tiposLimpieza);
        }
    }
}
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

    @GetMapping
    public List<Limpiador> buscarLimpiadores(LimpiadorSearchCriteria criteria) {
        return limpiadorService.buscarLimpiadores(criteria);
    }
}
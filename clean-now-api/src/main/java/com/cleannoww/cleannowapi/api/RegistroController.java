package com.cleannoww.cleannowapi.api;
import com.cleannoww.cleannowapi.domain.Cliente;

import com.cleannoww.cleannowapi.domain.Evaluacion;
import com.cleannoww.cleannowapi.service.RegistroService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("api/v1/registro")
public class RegistroController {
    private final RegistroService registroService;
    public RegistroController(RegistroService registroService) {
        this.registroService = registroService;
    }

    @PostMapping
    public ResponseEntity<Cliente> registrarCliente(@RequestBody Cliente cliente) {
        return new ResponseEntity<Cliente>(registroService.registrarCliente(cliente),HttpStatus.CREATED);
    }
}
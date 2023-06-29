package com.cleannoww.cleannowapi.service;
import com.cleannoww.cleannowapi.domain.Limpiador;
import com.cleannoww.cleannowapi.domain.LimpiadorSearchCriteria;
import com.cleannoww.cleannowapi.repository.LimpiadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LimpiadorService {
    private final LimpiadorRepository limpiadorRepository;

    @Autowired
    public LimpiadorService(LimpiadorRepository limpiadorRepository) {
        this.limpiadorRepository = limpiadorRepository;
    }

    public List<Limpiador> buscarLimpiadores(LimpiadorSearchCriteria criteria) {
        return limpiadorRepository.buscarLimpiadores(criteria);
    }
}
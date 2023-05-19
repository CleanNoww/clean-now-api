package com.cleannoww.cleannowapi.service.impl;
import com.cleannoww.cleannowapi.domain.Limpiador;
import com.cleannoww.cleannowapi.domain.TipoLimpieza;
import com.cleannoww.cleannowapi.repository.LimpiadorRepository;
import com.cleannoww.cleannowapi.service.LimpiadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LimpiadorServiceImpl implements LimpiadorService {
    private final LimpiadorRepository limpiadorRepository;

    @Autowired
    public LimpiadorServiceImpl(LimpiadorRepository limpiadorRepository) {
        this.limpiadorRepository = limpiadorRepository;
    }

    @Override
    public List<Limpiador> buscarPorNombre(String nombre) {
        return limpiadorRepository.buscarPorNombre(nombre);
    }

    @Override
    public List<Limpiador> buscarConFiltros(String nombre, Float calificacion, Integer numServicios, Integer edadMin, Integer edadMax, List<String> tiposLimpieza) {
        List<Limpiador> limpiadores = limpiadorRepository.buscarPorNombre(nombre);

        if (calificacion != null) {
            limpiadores = filtrarPorCalificacion(limpiadores, calificacion);
        }

        if (numServicios != null) {
            limpiadores = filtrarPorNumServicios(limpiadores, numServicios);
        }

        if (edadMin != null || edadMax != null) {
            limpiadores = filtrarPorEdad(limpiadores, edadMin, edadMax);
        }

        if (tiposLimpieza != null && !tiposLimpieza.isEmpty()) {
            limpiadores = filtrarPorTipoLimpieza(limpiadores, tiposLimpieza);
        }

        return limpiadores;
    }

    private List<Limpiador> filtrarPorCalificacion(List<Limpiador> limpiadores, Float calificacion) {
        List<Limpiador> resultado = new ArrayList<>();
        for (Limpiador limpiador : limpiadores) {
            if (limpiador.getCalificacion() >= calificacion) {
                resultado.add(limpiador);
            }
        }
        return resultado;
    }

    private List<Limpiador> filtrarPorNumServicios(List<Limpiador> limpiadores, Integer numServicios) {
        List<Limpiador> resultado = new ArrayList<>();
        for (Limpiador limpiador : limpiadores) {
            if (limpiador.getNum_servicios() == numServicios) {
                resultado.add(limpiador);
            }
        }
        return resultado;
    }

    private List<Limpiador> filtrarPorEdad(List<Limpiador> limpiadores, Integer edadMin, Integer edadMax) {
        List<Limpiador> resultado = new ArrayList<>();
        for (Limpiador limpiador : limpiadores) {
            int edad = limpiador.getEdad();
            if ((edadMin == null || edad >= edadMin) && (edadMax == null || edad <= edadMax)) {
                resultado.add(limpiador);
            }
        }
        return resultado;
    }

    private List<Limpiador> filtrarPorTipoLimpieza(List<Limpiador> limpiadores, List<String> tiposLimpieza) {
        List<Limpiador> resultado = new ArrayList<>();
        for (Limpiador limpiador : limpiadores) {
            List<String> tiposLimpiezaLimpiador = limpiador.getTipoLimpieza().stream()
                    .map(TipoLimpieza::getNombre)
                    .toList();
            if (tiposLimpiezaLimpiador.containsAll(tiposLimpieza)) {
                resultado.add(limpiador);
            }
        }
        return resultado;
    }
}
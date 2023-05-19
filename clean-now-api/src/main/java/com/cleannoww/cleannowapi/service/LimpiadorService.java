package com.cleannoww.cleannowapi.service;
import com.cleannoww.cleannowapi.domain.Limpiador;

import java.util.List;

public interface LimpiadorService {
    List<Limpiador> buscarPorNombre(String nombre);

    List<Limpiador> buscarConFiltros(String nombre, Float calificacion, Integer numServicios, Integer edadMin, Integer edadMax, List<String> tiposLimpieza);
}
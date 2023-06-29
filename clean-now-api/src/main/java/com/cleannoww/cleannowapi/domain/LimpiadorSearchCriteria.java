package com.cleannoww.cleannowapi.domain;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class LimpiadorSearchCriteria {
    private String nombre;
    private Float calificacionMin;
    private Float calificacionMax;
    private Integer numServiciosMin;
    private Integer numServiciosMax;
    private Integer edadMin;
    private Integer edadMax;
    private List<String> tiposLimpieza;
}

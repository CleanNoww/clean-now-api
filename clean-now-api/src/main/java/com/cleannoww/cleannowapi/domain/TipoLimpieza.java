package com.cleannoww.cleannowapi.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="TiposLimpieza")
@Getter
@Setter
public class TipoLimpieza {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id_tipolimpieza",nullable = false)
    private int id_tipoLimpieza;
    @Column(name="nombre",nullable = false)
    private String nombre;
    @Column(name="descripcion")
    private String descricion;
}

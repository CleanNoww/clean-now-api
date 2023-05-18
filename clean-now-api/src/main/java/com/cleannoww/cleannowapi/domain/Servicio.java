package com.cleannoww.cleannowapi.domain;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.sql.Timestamp;
@Entity
@Table(name="Servicios")
@Getter
@Setter
public class Servicio {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id_servicio;
    @Column(name="inicio")
    private Timestamp inicio;
    @Column(name="fin")
    private Timestamp fin;
    @Column(name="estado",nullable = false)
    private String estado;
    @Column(name="direccion",nullable = false)
    private String direccion;
    @Column(name="tareas",nullable = false)
    private String tareas;
    @Column(name="precio",nullable = false)
    private float precio;
}
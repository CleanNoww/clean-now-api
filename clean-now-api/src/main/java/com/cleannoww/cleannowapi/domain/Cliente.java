package com.cleannoww.cleannowapi.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;
@Entity
@Table(name="Clientes")
@Getter
@Setter
public class Cliente {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id_cliente")
    private int id_cliente;
    @Column(name="dni")
    private int dni;
    @Column(name="nombre_completo")
    private String nombre_completo;
    @Column(name="email")
    private String email;
    @Column(name="contraseña")
    private String contraseña;
    @Column(name="tipoRegistro")
    private String tipoRegistro;
    @Column(name="direccion",nullable = false)
    private String direccion;
    @OneToMany(mappedBy = "cliente")
    private List<ReservaServicio> historialReservas;
    @OneToMany(mappedBy = "cliente")
    private List<Evaluacion> historialEvaluaciones;
}
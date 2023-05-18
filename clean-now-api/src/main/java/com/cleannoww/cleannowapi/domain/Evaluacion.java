package com.cleannoww.cleannowapi.domain;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Evaluaciones")
@Getter
@Setter
public class Evaluacion {
    private static final SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
    @Column(name="fecha")
    private Timestamp fecha;
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id_evaluacion;
    @Column(name="calificacion")
    private int calificacion;
    @Column(name="comentario")
    private String comentario;
    @OneToOne
    @JoinColumn(name = "id_reserva", nullable = false)
    private ReservaServicio reseServ;
    @ManyToOne
    @JoinColumn(name = "id_cliente",nullable = false)
    private Cliente cliente;
}
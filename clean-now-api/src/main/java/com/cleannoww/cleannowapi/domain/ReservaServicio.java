package com.cleannoww.cleannowapi.domain;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;
import java.text.SimpleDateFormat;
@Entity
@Table(name="ReservasServicio")
@Getter
@Setter
public class ReservaServicio {
    private static final SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id_reserva;
    @Column(name="metodoPago",nullable = false)
    private String metodoPago;
    @Column(name="fechaReserva")
    private Timestamp fechaReserva;
    @Column(name="fechaServicio")
    private Date fechaServicio;
    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;
    @ManyToOne
    @JoinColumn(name = "id_limpiador")
    private Limpiador limpiador;
    @OneToOne
    @JoinColumn(name = "id_servicio")
    private Servicio servicio;

}
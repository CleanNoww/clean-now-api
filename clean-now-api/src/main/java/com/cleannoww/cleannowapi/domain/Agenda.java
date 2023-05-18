package com.cleannoww.cleannowapi.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Entity
@Table(name="Agendas")
@Getter
@Setter
public class Agenda {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id_agenda;
    @OneToMany
    @JoinColumn(name="id_reserva")
    private List<ReservaServicio> reservas;

}
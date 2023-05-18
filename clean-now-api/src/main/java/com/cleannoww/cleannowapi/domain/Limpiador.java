package com.cleannoww.cleannowapi.domain;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;
@Entity
@Table(name="Limpiadores")
@Getter
@Setter
public class Limpiador {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id_limpiador")
    private int id_limpiador;
    @Column(name="dni")
    private int dni;
    @Column(name="edad")
    private int edad;
    @Column(name="nombre_completo")
    private String nombre_completo;
    @Column(name="email")
    private String email;
    @Column(name="contraseña")
    private String contraseña;
    @Column(name="tipoRegistro")
    private String tipoRegistro;
    @Column(name="num_servicios")
    private int num_servicios;
    @Column(name="telefono",nullable = false)
    private String telefono;
    @Column(name="descripcion",nullable = false)
    private String descripcion;
    @Column(name="calificacion",nullable = false)
    private float calificacion;
    @ManyToMany
    @JoinColumn(name ="id_tipolimpieza",nullable = false)
    private List<TipoLimpieza> tipoLimpieza;
    @OneToOne
    @JoinColumn(name ="id_agenda",nullable = false)
    private Agenda agenda;
    @OneToMany(mappedBy = "limpiador")
    private List<ReservaServicio> reservas;
}
package com.cleannoww.cleannowapi.domain;
import java.text.SimpleDateFormat;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import com.cleannoww.cleannowapi.domain.Cliente;
import org.hibernate.cache.spi.TimestampsRegion;
@Entity
@Table(name="Evaluaciones")
@Getter
@Setter
public class Evaluacion {
    private static final SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy ");
    @Column(name="fecha")
    private Timestamp fecha= new Timestamp(System.currentTimeMillis());
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id_evaluacion;
    @Column(name="calificacion")
    private int calificacion;
    @Column(name="comentario")
    private String comentario;
    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;
    @ManyToOne
    @JoinColumn(name = "id_limpiador")
    private Limpiador limpiador;

}
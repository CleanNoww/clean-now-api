package com.cleannoww.cleannowapi.repository;
import com.cleannoww.cleannowapi.domain.Limpiador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LimpiadorRepository extends JpaRepository<Limpiador, Integer> {
    @Query("SELECT l FROM Limpiador l WHERE LOWER(l.nombre_completo) LIKE LOWER(CONCAT('%', :nombre, '%'))")
    List<Limpiador> buscarPorNombre(@Param("nombre") String nombre);
}
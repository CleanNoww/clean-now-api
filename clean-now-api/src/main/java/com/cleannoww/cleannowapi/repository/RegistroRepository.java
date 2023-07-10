package com.cleannoww.cleannowapi.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cleannoww.cleannowapi.domain.Cliente;

@Repository
public interface RegistroRepository extends JpaRepository<Cliente, Integer> {
}

package com.cleannoww.cleannowapi.service;
import com.cleannoww.cleannowapi.domain.Cliente;

public interface RegistroService {
    Cliente registrarCliente(Cliente cliente);
    Cliente actualizarCliente(int idCliente, Cliente cliente);
}

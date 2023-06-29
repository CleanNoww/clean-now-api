package com.cleannoww.cleannowapi.repository;
import com.cleannoww.cleannowapi.domain.Limpiador;
import com.cleannoww.cleannowapi.domain.LimpiadorSearchCriteria;
import com.cleannoww.cleannowapi.domain.TipoLimpieza;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class LimpiadorRepository {
    @PersistenceContext
    private EntityManager entityManager;

    public List<Limpiador> buscarLimpiadores(LimpiadorSearchCriteria criteria) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Limpiador> query = cb.createQuery(Limpiador.class);
        Root<Limpiador> limpiadorRoot = query.from(Limpiador.class);

        List<Predicate> predicates = new ArrayList<>();

        if (criteria.getNombre() != null && !criteria.getNombre().isEmpty()) {
            predicates.add(cb.like(cb.lower(limpiadorRoot.get("nombre_completo")), "%" + criteria.getNombre().toLowerCase() + "%"));
        }

        if (criteria.getCalificacionMin() != null) {
            predicates.add(cb.greaterThanOrEqualTo(limpiadorRoot.get("calificacion"), criteria.getCalificacionMin()));
        }

        if (criteria.getCalificacionMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(limpiadorRoot.get("calificacion"), criteria.getCalificacionMax()));
        }

        if (criteria.getNumServiciosMin() != null) {
            predicates.add(cb.greaterThanOrEqualTo(limpiadorRoot.get("num_servicios"), criteria.getNumServiciosMin()));
        }

        if (criteria.getNumServiciosMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(limpiadorRoot.get("num_servicios"), criteria.getNumServiciosMax()));
        }

        if (criteria.getEdadMin() != null) {
            predicates.add(cb.greaterThanOrEqualTo(limpiadorRoot.get("edad"), criteria.getEdadMin()));
        }

        if (criteria.getEdadMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(limpiadorRoot.get("edad"), criteria.getEdadMax()));
        }

        if (criteria.getTiposLimpieza() != null && !criteria.getTiposLimpieza().isEmpty()) {
            Join<Limpiador, TipoLimpieza> tipoLimpiezaJoin = limpiadorRoot.join("tipoLimpieza");
            predicates.add(tipoLimpiezaJoin.get("nombre").in(criteria.getTiposLimpieza()));
        }

        query.where(predicates.toArray(new Predicate[0]));

        TypedQuery<Limpiador> typedQuery = entityManager.createQuery(query);

        return typedQuery.getResultList();
    }
}
package com.nochoke.nochoke.EAN;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EANItemRepository extends JpaRepository<EANItem, Long> {
    EANItem findByEAN(String EAN);
}

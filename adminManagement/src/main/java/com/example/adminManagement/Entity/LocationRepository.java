package com.example.adminManagement.Entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {
    @Query("SELECT l FROM Location l  WHERE l.name =?1")
    Location getLocationByName(String name);

    @Query("SELECT COUNT(l) FROM Location l")
    int getNumberOfLocations();
}

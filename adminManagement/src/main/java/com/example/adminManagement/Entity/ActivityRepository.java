package com.example.adminManagement.Entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Integer> {
    @Query("SELECT a FROM Activity a JOIN Location l ON a.location_id = l.location_id WHERE l.name =?1")
    List<Activity> findActivityByDestinationName(String name);
}

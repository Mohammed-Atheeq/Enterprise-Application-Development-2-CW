package com.example.adminManagement.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int location_id;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "adult_price")
    private int adult_price;

    @Column(name = "children_price")
    private int children_price;
    @Column(name = "infant_price")
    private int infant_price;

    public int getLocation_id() {
        return location_id;
    }

    public void setLocation_id(int location_id) {
        this.location_id = location_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getAdult_price() {
        return adult_price;
    }

    public void setAdult_price(int adult_price) {
        this.adult_price = adult_price;
    }

    public int getChildren_price() {
        return children_price;
    }

    public void setChildren_price(int children_price) {
        this.children_price = children_price;
    }

    public int getInfant_price() {
        return infant_price;
    }

    public void setInfant_price(int infant_price) {
        this.infant_price = infant_price;
    }
}

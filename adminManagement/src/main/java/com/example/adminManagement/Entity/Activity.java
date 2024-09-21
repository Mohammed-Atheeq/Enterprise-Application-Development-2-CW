package com.example.adminManagement.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "activity")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int activity_id;

    @Column(name = "location_id ")
    private int location_id;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "adult_price")
    private int adultprice;
    @Column(name = "child_price")
    private int childprice;

    public int getActivity_id() {
        return activity_id;
    }

    public void setActivity_id(int activity_id) {
        this.activity_id = activity_id;
    }

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

    public int getAdultprice() {
        return adultprice;
    }

    public void setAdultprice(int adultprice) {
        this.adultprice = adultprice;
    }

    public int getChildprice() {
        return childprice;
    }

    public void setChildprice(int childprice) {
        this.childprice = childprice;
    }
}

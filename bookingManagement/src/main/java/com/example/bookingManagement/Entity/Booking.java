package com.example.bookingManagement.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int booking_id;
    @Column(name = "customer_id")
    private int customer_id;
    @Column(name = "adults")
    private int no_adults;
    @Column(name = "childrens")
    private int no_children;
    @Column(name = "infant")
    private int no_infant;
    @Column(name = "destination")
    private String destination;
    @Column(name = "departure_date")
    private String departure_date;
    @Column(name = "return_date")
    private String retrun_date;
    @Column(name = "hotel_type")
    private int hotel_type;
    @Column(name = "hotel_name")
    private String hotel_name;
    @Column(name = "room_type")
    private String room_type;
    @Column(name = "room")
    private int no_room;
    @Column(name = "airline")
    private String airline;
    @Column(name = "fair_type")
    private String fair_type;
    @Column(name = "activity")
    private String activity;

    @Column(name = "amount")
    private int amount;

    public int getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(int booking_id) {
        this.booking_id = booking_id;
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public int getNo_adults() {
        return no_adults;
    }

    public void setNo_adults(int no_adults) {
        this.no_adults = no_adults;
    }

    public int getNo_children() {
        return no_children;
    }

    public void setNo_children(int no_children) {
        this.no_children = no_children;
    }

    public int getNo_infant() {
        return no_infant;
    }

    public void setNo_infant(int no_infant) {
        this.no_infant = no_infant;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getDeparture_date() {
        return departure_date;
    }

    public void setDeparture_date(String departure_date) {
        this.departure_date = departure_date;
    }

    public String getRetrun_date() {
        return retrun_date;
    }

    public void setRetrun_date(String retrun_date) {
        this.retrun_date = retrun_date;
    }

    public int getHotel_type() {
        return hotel_type;
    }

    public void setHotel_type(int hotel_type) {
        this.hotel_type = hotel_type;
    }

    public String getHotel_name() {
        return hotel_name;
    }

    public void setHotel_name(String hotel_name) {
        this.hotel_name = hotel_name;
    }

    public String getRoom_type() {
        return room_type;
    }

    public void setRoom_type(String room_type) {
        this.room_type = room_type;
    }

    public int getNo_room() {
        return no_room;
    }

    public void setNo_room(int no_room) {
        this.no_room = no_room;
    }

    public String getAirline() {
        return airline;
    }

    public void setAirline(String airline) {
        this.airline = airline;
    }

    public String getFair_type() {
        return fair_type;
    }

    public void setFair_type(String fair_type) {
        this.fair_type = fair_type;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}

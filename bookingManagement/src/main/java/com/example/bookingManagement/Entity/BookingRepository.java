package com.example.bookingManagement.Entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
    @Query("Select b from Booking b where b.customer_id=?1")
    List<Booking> getAllBookingsByCustomerId(int cid);

    @Query("SELECT COUNT(l) FROM Booking l")
    int getNumberOfBookings();

    @Query("SELECT SUM(b.amount) FROM Booking b")
    int getTotalRevenue();

}

package com.example.bookingManagement.Service;

import com.example.bookingManagement.Entity.Booking;
import com.example.bookingManagement.Entity.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;
    public Booking bookTour(Booking booking) {
        return bookingRepository.save(booking);
    }


    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookById(int id) {
        Optional<Booking> booking=bookingRepository.findById(id);
        if(booking.isPresent())
        {
            return booking.get();
        }
        return null;
    }

    public Booking updateBook(Booking booking) {
        return bookingRepository.save(booking);
    }

    public void deleteBooking(int id) {
        bookingRepository.deleteById(id);
    }

    public List<Booking> getAllBookingsByCustomerId(int cid) {
        return bookingRepository.getAllBookingsByCustomerId(cid);
    }

    public int getNumberOfBookings() {
        return bookingRepository.getNumberOfBookings();
    }

    public int getTotalRevenue() {
        return bookingRepository.getTotalRevenue();
    }
}

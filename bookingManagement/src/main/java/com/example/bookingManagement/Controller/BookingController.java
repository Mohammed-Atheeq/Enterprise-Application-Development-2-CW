package com.example.bookingManagement.Controller;

import com.example.bookingManagement.Entity.Booking;
import com.example.bookingManagement.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PostMapping(path = "/bookings")
    public Booking bookTour(@RequestBody Booking booking)
    {
        return bookingService.bookTour(booking);
    }

    @GetMapping(path = "/bookings")
    public List<Booking> getAllBookings()
    {
        return bookingService.getAllBookings();
    }
    @GetMapping(path = "/bookings/{id}")
    public Booking getBookById(@PathVariable int id)
    {
        return bookingService.getBookById(id);
    }

    @GetMapping(path = "/bookings", params = "cid")
    public List<Booking> getAllBookingsByCustomerId(int cid)
    {
        return bookingService.getAllBookingsByCustomerId(cid);
    }


    @PutMapping(path = "/bookings/{id}")
    public Booking updateBook(@RequestBody Booking booking)
    {
        return bookingService.updateBook(booking);
    }

    @DeleteMapping(path = "/bookings/{id}")
    public void deleteBooking(@PathVariable int id){
        bookingService.deleteBooking(id);
    }

    @GetMapping(path = "/bookings/count")
    public int getNumberOfBookings(){
        return bookingService.getNumberOfBookings();
    }

    @GetMapping(path = "/bookings/revenue")
    public int getTotalRevenue(){
        return bookingService.getTotalRevenue();
    }

}

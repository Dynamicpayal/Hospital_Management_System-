package com.hms;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class HelloController {

    @GetMapping("/careSync")
    public String sayHello() {
        return "Hello, World!";
    }
}

// BlogController.java
package com.example.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {
    @Autowired
    private BlogService blogService;

    @GetMapping
    public List<Blog> getAllBlogs(@RequestParam int page, @RequestParam int size) {
        return blogService.getAllBlogs(page, size);
    }

    @GetMapping("/{id}")
    public Blog getBlogById(@PathVariable Long id) {
        return blogService.getBlogById(id);
    }

    @PostMapping
    public Blog saveBlog(@RequestBody Blog blog) {
        return blogService.saveBlog(blog);
    }

    @PostMapping("/{id}/like")
    public Blog likeBlog(@PathVariable Long id) {
        return blogService.likeBlog(id);
    }
}

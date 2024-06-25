import express from 'express';
import { Book } from "../models/book.model.js";
const route = express.Router();

// Route for save a new Book to database
route.post('/', async (req,res)=>{
    try {
       if(!req.body.title || !req.body.author || !req.body.publishYear){
         return res.status(200).send({'message': 'Send all required fields: title, author, publishYear'});
       }
       const newBook = {
         title: req.body.title,
         author: req.body.author,
         publishYear: req.body.publishYear,
       };
       const book = await Book.create(newBook);
       return res.status(201).send({message:"Book Added Successfully"});  
    } catch (error) {
       console.log(error.message);
       res.status(500).send({message:error.message});
    }
 });
 
 
 // Route for get All books from Database
 route.get('/', async (req,res)=>{
    try {
       const books = await Book.find({});
       return res.status(200).json({
         count: books.length,
         books: books
       });
    } catch (error) {
       console.log(error.message);
       res.status(500).send({message: error.message});
    }
 })
 
 
 // Route for get a book from Database by using (id)
 route.get('/:id', async (req,res)=>{
     try {
        const id = req.params.id;
        const book = await Book.findById(id);
        return res.status(200).json(book);
     } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
     }
  })
 
 
 // Route for update book
 route.put('/:id', async (req,res)=>{
    try {
     if(!req.body.title || !req.body.author || !req.body.publishYear){
         return res.status(400).send({
             'message': 'Send all required fields: title, author, publishYear'
         });
     }
     const {id} = req.params;
     const result = await Book.findByIdAndUpdate(id,req.body);
 
     if(!result){
        return res.status(404).json({message:'Book not Found'});
     }
 
     return res.status(200).json({message:'Book update Successfully'});
    } catch (error) {
      console.log(error.message);
      res.status(500).send({'message':error.message});
    }
 })
 
 
 // Route for Delete a Book by (id)
 route.delete('/:id', async (req, res)=>{
    try {
      const {id} = req.params;
      const result = await Book.findByIdAndDelete(id);
      if(!result){
         return res.status(404).json({'message':'Book not Found'});
      }
 
      return res.status(200).json({'message':'Book Deleted Successfully'});
 
    } catch (error) {
       console.log(error.message);
       res.status(500).send({'message':error.message});
    }
 });

 export default route;
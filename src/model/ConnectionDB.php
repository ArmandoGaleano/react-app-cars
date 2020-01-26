<?php 
abstract class ConnectionDB {
    private $userDB = 'root';
    private $passDB = '';
    protected function connDB(){
        try{
           $conn = new PDO('mysql:host=localhost;dbname=react;charset=utf8',$this->userDB,$this->passDB);
           $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
           return $conn;
        }catch(PDOexception $error){
            echo $error->getMessage();
        }
    }
}
?>
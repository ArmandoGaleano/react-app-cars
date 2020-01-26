<?php 
require_once '../ConnectionDB.php';
class Cars extends ConnectionDB {
    public function getCars(){
        try{
            $apiCars = [];
            $stmt = $this->connDB()->prepare('SELECT * FROM cars');
            $stmt->execute();
            $consultReturned = $stmt->fetchAll(PDO::FETCH_ASSOC);

            foreach($consultReturned as $car){
                $apiCars[] = [
                    'id'      => $car['id'],
                    'carName' => $car['carName'],
                    'carBrand'=> $car['carBrand'],
                    'price'   => $car['price']
                ];
            }
            header("Access-Control-Allow-Origin:*");
            //header("Content-Type: application/json");
            echo json_encode($apiCars);
        }catch(Exception $error){
            echo $error->getMessage();
        }
        
    }
}
?>
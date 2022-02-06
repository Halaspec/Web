<!DOCTYPE html>
<html>
    <header>
        <title>Portfolio</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    </header>

    <body>
        <div class="Page_1">
            <section>
             <div class="profile">
                 <div class="profile_img">
                     <img src="src/hmz.jpg" alt="" class="pic">
                 </div>
                 <div class="title">
                    <span class="alias" >Hamza SALAH </br></span>
                    <span class="job" style="color:aliceblue; font-size:14px; padding-left: 15px;">Web Developper</span>
                 </div>
                 <div class="button">
                    <ion-icon name="send-outline" style="color: aliceblue;"></ion-icon>
                    <button class="msg" id="click">   Send me </button>
                 </div> 
             </div>
            <div class="pop" >
                <div class="container_box" style="overflow: hidden;">
                    <ion-icon id="close" name="close-circle" class="ion" style=" position: relative ;  left: 95%; cursor: pointer; color: rgb(218, 83, 83, 0.8); transform: scale(110%);"></ion-icon>
                    <div class="box">
                        <div class="popProfilText">
                            <img src="src/hmz.jpg" alt="" class="pic">
                            <div class="title">
                                <span class="alias" style=" cursor:default;" >Hamza SALAH </br></span>
                                <span class="job"   style="font-size: 14px; cursor:default ;">Web Developper</span>
                             </div>
                        </div>
                        <form action="https://formsubmit.co/salah@gmail.com " method="POST" style="width: 100%; display: flex; justify-content: flex-end; flex-wrap: wrap;"> 
                             <input type="email" id="mail" name="mail" required style="resize: none;width: 200%;background-color: f3f3f3;border-radius: 6px;border: 1px solid #ddd;outline: none; font-size: 14px; margin-bottom:20px; padding-left:40px; height:20px" placeholder="Salah@exemple.com" >
                             <input type="text" placeholder="Entrez votre méssage" name="msg" id="msg" class="textarea" required>
                             <input type="submit" class="btn" value="Envoyer" ></button>
                        </form>
                    </div>
                </div> 
              </div>
            </section>
          </div>

        <script src="script.js"></script>
        <div class="nav" style="position: absolute; top:0px; color: aliceblue;">
            <ion-icon name="logo-linkedin" style="transform: scale(200%); margin: 10px;"></ion-icon>
            <ion-icon name="logo-github"   style="transform: scale(200%); margin: 10px;"></ion-icon>
            <ion-icon name="receipt-outline" style="transform: scale(200%); margin: 10px;"></ion-icon>
        </div>

    </body>
</html>
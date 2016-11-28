window.onload=Cambiar;

var img= "<img src='";
var tam= "'width='600vw' height='400vw'>";
var imgsobre= "<img src='";
var imgFuera= "<img src='./ImgGal/pintura.jpg' width='600vw' height='400vw'> ";

function Cambiar()
{
	var A1=document.getElementById('a1');
	A1.addEventListener("click", function()
									{
										En("./ImgGal/1.jpg");
									}
						);
	A1.addEventListener("mouseover", function()
									{
										Sobre("./ImgGal/1.jpg");
									}
						);
	A1.addEventListener("mouseout", Fuera);
	var A2=document.getElementById('a2');
	A2.addEventListener("click", function()
									{
										En("./ImgGal/2.jpg");
									}
						);
	A2.addEventListener("mouseover", function()
									{
										Sobre("./ImgGal/2.jpg");
									}
						);
	A2.addEventListener("mouseout", Fuera);
	var A3=document.getElementById('a3');
	A3.addEventListener("click", function()
									{
										En("./ImgGal/3.jpg");
									}
						);
	A3.addEventListener("mouseover", function()
									{
										Sobre("./ImgGal/3.jpg");
									}
						);
	A3.addEventListener("mouseout", Fuera);

	var A4=document.getElementById('a4');
	A4.addEventListener("click", function()
									{
										En("./ImgGal/4.jpg");
									}
						);
	A4.addEventListener("mouseover", function()
									{
										Sobre("./ImgGal/4.jpg");
									}
						);
	A4.addEventListener("mouseout", Fuera);

	var C1=document.getElementById('c1');
	C1.addEventListener("click", function()
									{
										En("./ImgGal/5.jpg");
									}
						);
	C1.addEventListener("mouseover", function()
									{
										Sobre("./ImgGal/5.jpg");
									}
						);
	C1.addEventListener("mouseout", Fuera);

	var C2=document.getElementById('c2');
	C2.addEventListener("click", function()
									{
										En("./ImgGal/6.jpg");
									}
						);
	C2.addEventListener("mouseover", function()
									{
										Sobre("./ImgGal/6.jpg");
									}
						);
	C2.addEventListener("mouseout", Fuera);

	var C3=document.getElementById('c3');
	C3.addEventListener("click", function()
									{
										En("./ImgGal/7.jpg");
									}
						);
	C3.addEventListener("mouseover", function()
									{
										Sobre("./ImgGal/7.jpg");
									}
						);
	C3.addEventListener("mouseout", Fuera);

	var C4=document.getElementById('c4');
	C4.addEventListener("click", function()
									{
										En("./ImgGal/8.jpg");
									}
						);
	C4.addEventListener("mouseover", function()
									{
										Sobre("./ImgGal/8.jpg");
									}
						);
	C4.addEventListener("mouseout", Fuera);
}
function En(imagen)
{
	img +=imagen;
	img +=tam;
	var mostrar=document.getElementById('B').innerHTML= img;
	imgFuera=img;
	img="<img src='";
}
function Sobre(imagen)
{
	imgsobre +=imagen;
	imgsobre +=tam;
	var mostrar=document.getElementById('B').innerHTML= imgsobre;
	imgsobre="<img src='";
}
function Fuera()
{
	var mostrar=document.getElementById('B').innerHTML= imgFuera;
}
function ChangeText(button_id)
{
    if (document.getElementById(button_id).textContent == "Раз")
    {
        document.getElementById(button_id).textContent = "Два";
    }
    else
    {
        document.getElementById(button_id).textContent = "Раз";
    }
}
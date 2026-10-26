(function(){
  var btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});}
  var lb=document.getElementById('lb'),lbImg=document.getElementById('lbImg');
  document.querySelectorAll('[data-full]').forEach(function(b){
    b.addEventListener('click',function(){
      var im=b.querySelector('img');lbImg.src=b.dataset.full;lbImg.alt=im?im.alt:'';
      if(lb&&lb.showModal){lb.showModal()}else{window.open(b.dataset.full,'_blank')}
    });
  });
  if(lb){document.getElementById('lbClose').addEventListener('click',function(){lb.close()});
    lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});}
  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();

  var form=document.getElementById('inquiry');
  if(form){
    var topics={mhfa:'Mental Health First Aid training',workshop:'Survivor-centered workshop',youth:'Youth and TLP life skills',suicide:'Suicide awareness series',hiv:'HIV prevention education',curriculum:'Custom curriculum or resources',speaking:'Speaking engagement',vault:'Crown Vault membership'};
    var key=(location.hash||'').slice(1);
    if(topics[key]){form.topic.value=topics[key];}
    var msg=document.getElementById('formMsg');
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var n=form.name.value.trim(),em=form.email.value.trim();
      if(!n||!/^\S+@\S+\.\S+$/.test(em)){msg.textContent='Please add your name and a valid email so we can reply.';return}
      var body='Name: '+n+'\nOrganization: '+form.org.value+'\nEmail: '+em+'\nPhone: '+form.phone.value+'\nInterested in: '+form.topic.value+'\n\n'+form.message.value;
      window.location.href='mailto:aqueenscrowntilted@gmail.com?subject='+encodeURIComponent('AQCT inquiry: '+form.topic.value)+'&body='+encodeURIComponent(body);
      msg.textContent='Your email app should open with this message ready to send. If it does not, email aqueenscrowntilted@gmail.com directly.';
    });
  }
})();

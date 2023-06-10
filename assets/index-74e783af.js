(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&a(y)}).observe(document,{childList:!0,subtree:!0});function f(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(u){if(u.ep)return;u.ep=!0;const h=f(u);fetch(u.href,h)}})();function K(){}function be(i){return i()}function ke(){return Object.create(null)}function ue(i){i.forEach(be)}function _e(i){return typeof i=="function"}function V(i,d){return i!=i?d==d:i!==d||i&&typeof i=="object"||typeof i=="function"}function Me(i){return Object.keys(i).length===0}function t(i,d,f){i.insertBefore(d,f||null)}function e(i){i.parentNode&&i.parentNode.removeChild(i)}function n(i){return document.createElement(i)}function Le(i){return document.createTextNode(i)}function s(){return Le(" ")}function fe(i,d,f){f==null?i.removeAttribute(d):i.getAttribute(d)!==f&&i.setAttribute(d,f)}function We(i){return Array.from(i.childNodes)}function xe(i,d,f){i.classList[f?"add":"remove"](d)}let ce;function re(i){ce=i}function He(){if(!ce)throw new Error("Function called outside component initialization");return ce}function Ce(i){He().$$.on_mount.push(i)}const se=[],we=[];let ne=[];const ye=[],ve=Promise.resolve();let he=!1;function Ne(){he||(he=!0,ve.then(Te))}function $e(i){ne.push(i)}const me=new Set;let ie=0;function Te(){if(ie!==0)return;const i=ce;do{try{for(;ie<se.length;){const d=se[ie];ie++,re(d),qe(d.$$)}}catch(d){throw se.length=0,ie=0,d}for(re(null),se.length=0,ie=0;we.length;)we.pop()();for(let d=0;d<ne.length;d+=1){const f=ne[d];me.has(f)||(me.add(f),f())}ne.length=0}while(se.length);for(;ye.length;)ye.pop()();he=!1,me.clear(),re(i)}function qe(i){if(i.fragment!==null){i.update(),ue(i.before_update);const d=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,d),i.after_update.forEach($e)}}function ge(i){const d=[],f=[];ne.forEach(a=>i.indexOf(a)===-1?d.push(a):f.push(a)),f.forEach(a=>a()),ne=d}const pe=new Set;let Ae;function j(i,d){i&&i.i&&(pe.delete(i),i.i(d))}function z(i,d,f,a){if(i&&i.o){if(pe.has(i))return;pe.add(i),Ae.c.push(()=>{pe.delete(i),a&&(f&&i.d(1),a())}),i.o(d)}else a&&a()}function U(i){i&&i.c()}function X(i,d,f,a){const{fragment:u,after_update:h}=i.$$;u&&u.m(d,f),a||$e(()=>{const y=i.$$.on_mount.map(be).filter(_e);i.$$.on_destroy?i.$$.on_destroy.push(...y):ue(y),i.$$.on_mount=[]}),h.forEach($e)}function B(i,d){const f=i.$$;f.fragment!==null&&(ge(f.after_update),ue(f.on_destroy),f.fragment&&f.fragment.d(d),f.on_destroy=f.fragment=null,f.ctx=[])}function De(i,d){i.$$.dirty[0]===-1&&(se.push(i),Ne(),i.$$.dirty.fill(0)),i.$$.dirty[d/31|0]|=1<<d%31}function Q(i,d,f,a,u,h,y,T=[-1]){const k=ce;re(i);const w=i.$$={fragment:null,ctx:[],props:h,update:K,not_equal:u,bound:ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d.context||(k?k.$$.context:[])),callbacks:ke(),dirty:T,skip_bound:!1,root:d.target||k.$$.root};y&&y(w.root);let b=!1;if(w.ctx=f?f(i,d.props||{},(_,I,...M)=>{const g=M.length?M[0]:I;return w.ctx&&u(w.ctx[_],w.ctx[_]=g)&&(!w.skip_bound&&w.bound[_]&&w.bound[_](g),b&&De(i,_)),I}):[],w.update(),b=!0,ue(w.before_update),w.fragment=a?a(w.ctx):!1,d.target){if(d.hydrate){const _=We(d.target);w.fragment&&w.fragment.l(_),_.forEach(e)}else w.fragment&&w.fragment.c();d.intro&&j(i.$$.fragment),X(i,d.target,d.anchor,d.customElement),Te()}re(k)}class ee{$destroy(){B(this,1),this.$destroy=K}$on(d,f){if(!_e(f))return K;const a=this.$$.callbacks[d]||(this.$$.callbacks[d]=[]);return a.push(f),()=>{const u=a.indexOf(f);u!==-1&&a.splice(u,1)}}$set(d){this.$$set&&!Me(d)&&(this.$$.skip_bound=!0,this.$$set(d),this.$$.skip_bound=!1)}}function Pe(i){let d;return{c(){d=n("div"),fe(d,"class","svelte-1h5ldsd"),xe(d,"hover",!i[0])},m(f,a){t(f,d,a),i[5](d)},p(f,[a]){a&1&&xe(d,"hover",!f[0])},i:K,o:K,d(f){f&&e(d),i[5](null)}}}function Ie(i,d,f){let{path:a}=d,{options:u={}}=d,{fixed:h=!1}=d,{loopDelay:y=2e3}=d,T={preload:!0,poster:"npt:10:10",autoPlay:!0},k;Ce(()=>{let b=window.AsciinemaPlayer.create("asciinema/recordings/"+a,k,{...T,...u});y&&b.addEventListener("ended",()=>{setTimeout(()=>b.getCurrentTime()==b.getDuration()&&b.play(),y)})});function w(b){we[b?"unshift":"push"](()=>{k=b,f(1,k)})}return i.$$set=b=>{"path"in b&&f(2,a=b.path),"options"in b&&f(3,u=b.options),"fixed"in b&&f(0,h=b.fixed),"loopDelay"in b&&f(4,y=b.loopDelay)},[h,k,a,u,y,w]}class G extends ee{constructor(d){super(),Q(this,d,Ie,Pe,V,{path:2,options:3,fixed:0,loopDelay:4})}}function Ee(i){let d,f,a,u,h,y,T,k,w,b,_,I,M,g,W,E=`<code class="language-sh"><span class="token builtin class-name">cd</span> /usr/share/wordlists
<span class="token function">ls</span> <span class="token comment"># Note that there is a rockyou.txt.gz file</span>
<span class="token function">sudo</span> gunzip rockyou.txt.gz
<span class="token function">ls</span> <span class="token comment"># You should now see a rockyou.txt</span></code>`,N,A,C;return A=new G({props:{path:"start.cast",options:{rows:10},fixed:!0}}),{c(){d=n("h2"),d.textContent="Getting Started",f=s(),a=n("p"),a.innerHTML='The resources required for this activity is <a href="https://github.com/featherbear/UNSW-COMP6845-password-cracking/archive/refs/heads/files.zip" rel="nofollow">available for download here</a>',u=s(),h=n("p"),h.innerHTML=`This activity assumes you are running Kali Linux, which already contains the required tools and wordlists to complete the activities.<br/>
If you are not using Kali Linux, ensure you have <a href="https://github.com/hashcat/hashcat" rel="nofollow">Hashcat</a> and <a href="https://sourceforge.net/projects/crunch-wordlist/" rel="nofollow">Crunch</a> installed, as well as a copy of the <a href="https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt" rel="nofollow"><code>rockyou.txt</code></a> wordlist.`,y=s(),T=n("h2"),T.textContent="Start",k=s(),w=n("p"),w.innerHTML=`One of the first things we will do is to run <code>hashcat --help</code> to review the help page as required.<br/>
We will be working our way through the different attack modes of Hashcat.`,b=s(),_=n("h3"),_.textContent="Kali Linux - Prepare the rockyou.txt wordlist",I=s(),M=n("p"),M.innerHTML="An archived copy of <code>rockyou.txt</code> is available on Kali Linux, we must first extract it.",g=s(),W=n("pre"),N=s(),U(A.$$.fragment),fe(W,"class","language-sh")},m($,x){t($,d,x),t($,f,x),t($,a,x),t($,u,x),t($,h,x),t($,y,x),t($,T,x),t($,k,x),t($,w,x),t($,b,x),t($,_,x),t($,I,x),t($,M,x),t($,g,x),t($,W,x),W.innerHTML=E,t($,N,x),X(A,$,x),C=!0},p:K,i($){C||(j(A.$$.fragment,$),C=!0)},o($){z(A.$$.fragment,$),C=!1},d($){$&&e(d),$&&e(f),$&&e(a),$&&e(u),$&&e(h),$&&e(y),$&&e(T),$&&e(k),$&&e(w),$&&e(b),$&&e(_),$&&e(I),$&&e(M),$&&e(g),$&&e(W),$&&e(N),B(A,$)}}}class Oe extends ee{constructor(d){super(),Q(this,d,null,Ee,V,{})}}function Se(i){let d,f,a,u,h,y,T,k,w,b,_,I,M,g,W,E,N,A,C,$=`<code class="language-undefined">?l = abcdefghijklmnopqrstuvwxyz
?u = ABCDEFGHIJKLMNOPQRSTUVWXYZ
?d = 0123456789
?h = 0123456789abcdef
?H = 0123456789ABCDEF
?s = «space»!&quot;#$%&amp;&#39;()*+,-./:;&lt;=&gt;?@[]^_&#96;&#123;|&#125;~
?a = ?l?u?d?s
?b = 0x00 - 0xff
</code>`,x,R,D,F,P,O,q,S,o,l,m,Z,J,Y,p,H,te,oe,de,le,r,L,ae;return w=new G({props:{path:"ntlm.cast"}}),Z=new G({props:{path:"ntlm_password1111.cast"}}),{c(){d=n("h2"),d.textContent="Wordlist Attack",f=s(),a=n("blockquote"),a.innerHTML="<p>For this first exercise we will use a wordlist attack to crack an NTLM hash using Hashcat.</p>",u=s(),h=n("p"),h.innerHTML="$&gt; <code>hashcat -m 1000 ntlm.txt /usr/share/wordlists/rockyou.txt</code>",y=s(),T=n("ul"),T.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The word-list to crack</li>`,k=s(),U(w.$$.fragment),b=s(),_=n("p"),_.innerHTML="Once complete we can see that for the hash in <code>ntlm.txt</code>, the password is <code>password</code>",I=s(),M=n("h2"),M.textContent="Hybrid Attack: Introduction",g=s(),W=n("p"),W.innerHTML='Now let’s use a <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">hybrid attack</a> where we will use the <code>rockyou.txt</code> wordlist alongside a <em>mask</em> to append 4 digits after each password.',E=s(),N=n("p"),N.innerHTML='If we look at <a href="https://hashcat.net/wiki/doku.php?id=mask_attack" rel="nofollow">Hashcat documentation</a> you will see we use <code>?d</code> to add a number to the end of each word.',A=s(),C=n("pre"),x=s(),R=n("h2"),R.textContent="Hybrid Wordlist + Brute-force Attack",D=s(),F=n("p"),F.innerHTML="Copy the provided <code>ntlm_password1111.txt</code> hash file to your machine.",P=s(),O=n("p"),O.textContent="Run the following in Hashcat",q=s(),S=n("p"),S.innerHTML="$&gt; <code>hashcat -a 6 -m 1000 ntlm_password1111.txt /usr/share/wordlists/rockyou.txt ?d?d?d?d</code>",o=s(),l=n("ul"),l.innerHTML=`<li><code>-a 6</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 6 (hybrid attack)</li> 
<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_password1111.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The word-list to crack</li> 
<li><code>?d?d?d?d</code> - The character set to append</li>`,m=s(),U(Z.$$.fragment),J=s(),Y=n("p"),Y.innerHTML="We can now see the password is <code>password1111</code>",p=s(),H=n("h2"),H.textContent="Hybrid Mask + Wordlist Attack",te=s(),oe=n("p"),oe.innerHTML="Let’s say we want to crack for a password like <code>1111password</code>. We can instead use attack mode <code>7</code> - a hybrid mask + wordlist attack.",de=s(),le=n("p"),le.innerHTML="e.g. for an NTLM password (<code>-m 1000</code>), we will perform a hybrid mask + wordlist attack (<code>-a 7</code>) with a mask of <code>?d?d?d?d</code> and the <code>rockyou.txt</code> dictionary",r=s(),L=n("blockquote"),L.innerHTML="<p><code>hashcat -a 7 -m 1000 &lt;your_NTLM_hash_file&gt; ?d?d?d?d /usr/share/wordlists/rockyou.txt</code></p>",fe(C,"class","language-undefined")},m(c,v){t(c,d,v),t(c,f,v),t(c,a,v),t(c,u,v),t(c,h,v),t(c,y,v),t(c,T,v),t(c,k,v),X(w,c,v),t(c,b,v),t(c,_,v),t(c,I,v),t(c,M,v),t(c,g,v),t(c,W,v),t(c,E,v),t(c,N,v),t(c,A,v),t(c,C,v),C.innerHTML=$,t(c,x,v),t(c,R,v),t(c,D,v),t(c,F,v),t(c,P,v),t(c,O,v),t(c,q,v),t(c,S,v),t(c,o,v),t(c,l,v),t(c,m,v),X(Z,c,v),t(c,J,v),t(c,Y,v),t(c,p,v),t(c,H,v),t(c,te,v),t(c,oe,v),t(c,de,v),t(c,le,v),t(c,r,v),t(c,L,v),ae=!0},p:K,i(c){ae||(j(w.$$.fragment,c),j(Z.$$.fragment,c),ae=!0)},o(c){z(w.$$.fragment,c),z(Z.$$.fragment,c),ae=!1},d(c){c&&e(d),c&&e(f),c&&e(a),c&&e(u),c&&e(h),c&&e(y),c&&e(T),c&&e(k),B(w,c),c&&e(b),c&&e(_),c&&e(I),c&&e(M),c&&e(g),c&&e(W),c&&e(E),c&&e(N),c&&e(A),c&&e(C),c&&e(x),c&&e(R),c&&e(D),c&&e(F),c&&e(P),c&&e(O),c&&e(q),c&&e(S),c&&e(o),c&&e(l),c&&e(m),B(Z,c),c&&e(J),c&&e(Y),c&&e(p),c&&e(H),c&&e(te),c&&e(oe),c&&e(de),c&&e(le),c&&e(r),c&&e(L)}}}class Re extends ee{constructor(d){super(),Q(this,d,null,Se,V,{})}}function Fe(i){let d,f,a,u,h,y,T,k,w,b,_,I,M,g,W,E,N,A,C,$,x,R,D,F,P,O,q,S,o,l,m,Z,J,Y;return M=new G({props:{path:"ntlm_bruteforce.cast"}}),m=new G({props:{path:"ntlm_bruteforce_2.cast"}}),{c(){d=n("h2"),d.textContent="Brute-force-best-force",f=s(),a=n("p"),a.textContent="What if the previous methods didn’t successfully crack the password? We can brute-force the password, but this is generally a last resort given the time it takes (we are trying every possible combination).",u=s(),h=n("blockquote"),h.innerHTML="<p>For this example, we will assume the password is 4 characters long and contains only ASCII characters.</p>",y=s(),T=n("p"),T.innerHTML='We tell Hashcat a password mask to follow when generating inputs. Providing <code>?a</code> (refer to the <a href="https://hashcat.net/wiki/doku.php?id=mask_attack" rel="nofollow">character sets</a>), we provide a combination of lowercase, uppercase, number and special characters from the ASCII character set. <code>?a?a</code> would be a 2-character ASCII password, <code>?a?a?a?a</code> would be a 4-character ASCII password and so on.',k=s(),w=n("blockquote"),w.innerHTML="<p><code>hashcat -m 1000 ntlm_bruteforce.txt -a 3 ?a?a?a?a</code></p>",b=s(),_=n("ul"),_.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_bruteforce.txt</code> - The hash file to crack</li> 
<li><code>-a 3</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 3 (brute-force attack)</li> 
<li><code>?a?a?a?a</code> - Password mask</li>`,I=s(),U(M.$$.fragment),g=s(),W=n("p"),W.innerHTML="We can now see the password is <code>pass</code>",E=s(),N=n("h2"),N.textContent="Brute-force with unknown length",A=s(),C=n("p"),C.textContent="In the previous example (where the password was 4 characters long), if a mask of 8 characters was provided, then Hashcrack wouldn’t (read: will never) successfully crack the password, as the mask provides an explicit length.",$=s(),x=n("p"),x.innerHTML="Now in the scenario where you don’t know the exact length but know that it is at most 5 characters long. To get around this we add the <code>--increment</code> flag which tells Hashcat to start at one character, then keep adding more until we’ve reached our final mask.",R=s(),D=n("blockquote"),D.innerHTML="<p><code>hashcat -m 1000 ntlm_bruteforce_2.txt -a 3 ?a?a?a?a?a --increment</code></p>",F=s(),P=n("ul"),P.innerHTML="<li>How many passwords does this mask generate? How do you calculate it?</li>",O=s(),q=n("p"),q.innerHTML="We can go a step further and tell Hashcat a minimum password length using <code>--increment-min=N</code>, which tells Hashcat to start at <code>N</code>-character passwords. For our test we will add <code>--increment-min=2</code>  which tell Hashcat to start with 2-character passwords.",S=s(),o=n("blockquote"),o.innerHTML="<p><code>hashcat -m 1000 ntlm_bruteforce_2.txt -a 3 ?a?a?a?a?a --increment --increment-min=2</code></p>",l=s(),U(m.$$.fragment),Z=s(),J=n("p"),J.innerHTML="We can now see the password is <code>p@s</code>"},m(p,H){t(p,d,H),t(p,f,H),t(p,a,H),t(p,u,H),t(p,h,H),t(p,y,H),t(p,T,H),t(p,k,H),t(p,w,H),t(p,b,H),t(p,_,H),t(p,I,H),X(M,p,H),t(p,g,H),t(p,W,H),t(p,E,H),t(p,N,H),t(p,A,H),t(p,C,H),t(p,$,H),t(p,x,H),t(p,R,H),t(p,D,H),t(p,F,H),t(p,P,H),t(p,O,H),t(p,q,H),t(p,S,H),t(p,o,H),t(p,l,H),X(m,p,H),t(p,Z,H),t(p,J,H),Y=!0},p:K,i(p){Y||(j(M.$$.fragment,p),j(m.$$.fragment,p),Y=!0)},o(p){z(M.$$.fragment,p),z(m.$$.fragment,p),Y=!1},d(p){p&&e(d),p&&e(f),p&&e(a),p&&e(u),p&&e(h),p&&e(y),p&&e(T),p&&e(k),p&&e(w),p&&e(b),p&&e(_),p&&e(I),B(M,p),p&&e(g),p&&e(W),p&&e(E),p&&e(N),p&&e(A),p&&e(C),p&&e($),p&&e(x),p&&e(R),p&&e(D),p&&e(F),p&&e(P),p&&e(O),p&&e(q),p&&e(S),p&&e(o),p&&e(l),B(m,p),p&&e(Z),p&&e(J)}}}class je extends ee{constructor(d){super(),Q(this,d,null,Fe,V,{})}}function Xe(i){let d,f,a,u,h,y,T,k,w,b,_,I=`<code class="language-undefined">crunch version 3.6

Crunch can create a wordlist based on criteria you specify.  The output from crunch can be sent to the screen, file, or to another program.

Usage: crunch &lt;min&gt; &lt;max&gt; [options]
where min and max are numbers

Please refer to the man page for instructions and examples on how to use crunch.</code>`,M,g,W,E,N,A,C,$,x,R,D,F,P,O,q,S,o;return E=new G({props:{path:"crunch.cast",options:{rows:15}}}),O=new G({props:{path:"ntlm_rockyou2801.cast"}}),{c(){d=n("h2"),d.textContent="Combination Attacks",f=s(),a=n("p"),a.textContent="For the next attack we are going to try a combination attack using a wordlist and our custom-built wordlist.",u=s(),h=n("p"),h.textContent="In this scenario let’s say we know the password is an English word and the last 4 characters of a password are a digit.",y=s(),T=n("p"),T.textContent="First, we will create a wordlist which has every possible number combination for 4 digits.",k=s(),w=n("p"),w.innerHTML="We will use <code>crunch</code> to do this (already installed in Kali Linux).",b=s(),_=n("pre"),M=s(),g=n("blockquote"),g.innerHTML="<p><code>crunch 4 4 0123456789 -o 4_numbers.txt</code></p>",W=s(),U(E.$$.fragment),N=s(),A=n("p"),A.innerHTML="Once we have created our extra wordlist (<code>4_numbers.txt</code>) we can run the attack with the <code>rockyou.txt</code> wordlist.",C=s(),$=n("p"),$.innerHTML="We will change use attack mode <code>-a 1</code> (combination attack).",x=s(),R=n("blockquote"),R.innerHTML="<p><code>hashcat -a 1 -m 1000 ntlm_rockyou2801.txt /usr/share/wordlists/rockyou.txt 4_numbers.txt</code></p>",D=s(),F=n("ul"),F.innerHTML=`<li><code>-a 3</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 1 (combination attack)</li> 
<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_rockyou2801.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The first part of the combination</li> 
<li><code>4_numbers.txt</code> - The second part of the combination</li>`,P=s(),U(O.$$.fragment),q=s(),S=n("p"),S.innerHTML="We can now see the password is <code>rockyou2801</code>",fe(_,"class","language-undefined")},m(l,m){t(l,d,m),t(l,f,m),t(l,a,m),t(l,u,m),t(l,h,m),t(l,y,m),t(l,T,m),t(l,k,m),t(l,w,m),t(l,b,m),t(l,_,m),_.innerHTML=I,t(l,M,m),t(l,g,m),t(l,W,m),X(E,l,m),t(l,N,m),t(l,A,m),t(l,C,m),t(l,$,m),t(l,x,m),t(l,R,m),t(l,D,m),t(l,F,m),t(l,P,m),X(O,l,m),t(l,q,m),t(l,S,m),o=!0},p:K,i(l){o||(j(E.$$.fragment,l),j(O.$$.fragment,l),o=!0)},o(l){z(E.$$.fragment,l),z(O.$$.fragment,l),o=!1},d(l){l&&e(d),l&&e(f),l&&e(a),l&&e(u),l&&e(h),l&&e(y),l&&e(T),l&&e(k),l&&e(w),l&&e(b),l&&e(_),l&&e(M),l&&e(g),l&&e(W),B(E,l),l&&e(N),l&&e(A),l&&e(C),l&&e($),l&&e(x),l&&e(R),l&&e(D),l&&e(F),l&&e(P),B(O,l),l&&e(q),l&&e(S)}}}class Be extends ee{constructor(d){super(),Q(this,d,null,Xe,V,{})}}function ze(i){let d,f,a;return{c(){d=n("table"),d.innerHTML=`<thead><tr><th align="left">Name</th> 
<th align="left">Function</th> 
<th align="left">Description</th> 
<th align="left">Example Rule</th> 
<th align="left">Input Word</th> 
<th align="left">Output Word</th> 
<th align="left">Note</th></tr></thead> 
<tbody><tr><td align="left">Nothing</td> 
<td align="left"><code>:</code></td> 
<td align="left">Do nothing (passthrough)</td> 
<td align="left"><code>:</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Lowercase</td> 
<td align="left"><code>l</code></td> 
<td align="left">Lowercase all letters</td> 
<td align="left"><code>l</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssw0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Uppercase</td> 
<td align="left"><code>u</code></td> 
<td align="left">Uppercase all letters</td> 
<td align="left"><code>u</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>P@SSW0RD</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Capitalize</td> 
<td align="left"><code>c</code></td> 
<td align="left">Capitalize the first letter and lower the rest</td> 
<td align="left"><code>c</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>P@ssw0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Invert Capitalize</td> 
<td align="left"><code>C</code></td> 
<td align="left">Lowercase first found character and uppercase the rest</td> 
<td align="left"><code>C</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@SSW0RD</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Toggle Case</td> 
<td align="left"><code>t</code></td> 
<td align="left">Toggle the case of all characters in word.</td> 
<td align="left"><code>t</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>P@SSw0RD</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Toggle @</td> 
<td align="left"><code>TN</code></td> 
<td align="left">Toggle the case of characters at position N</td> 
<td align="left"><code>T3</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@sSW0rd</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Reverse</td> 
<td align="left"><code>r</code></td> 
<td align="left">Reverse the entire word</td> 
<td align="left"><code>r</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>dr0Wss@p</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Duplicate</td> 
<td align="left"><code>d</code></td> 
<td align="left">Duplicate entire word</td> 
<td align="left"><code>d</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0rdp@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Duplicate N</td> 
<td align="left"><code>pN</code></td> 
<td align="left">Append duplicated word N times</td> 
<td align="left"><code>p2</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0rdp@ssW0rdp@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Reflect</td> 
<td align="left"><code>f</code></td> 
<td align="left">Duplicate word reversed</td> 
<td align="left"><code>f</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0rddr0Wss@p</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Rotate Left</td> 
<td align="left"><code>{</code></td> 
<td align="left">Rotate the word left.</td> 
<td align="left"><code>{</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>@ssW0rdp</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Rotate Right</td> 
<td align="left"><code>}</code></td> 
<td align="left">Rotate the word right</td> 
<td align="left"><code>}</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>dp@ssW0r</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Append Character</td> 
<td align="left"><code>$X</code></td> 
<td align="left">Append character X to end</td> 
<td align="left"><code>$1$2</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0rd12</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Prepend Character</td> 
<td align="left"><code>^X</code></td> 
<td align="left">Prepend character X to front</td> 
<td align="left"><code>^2^1</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>12p@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Truncate left</td> 
<td align="left"><code>[</code></td> 
<td align="left">Delete first character</td> 
<td align="left"><code>[</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Truncate right</td> 
<td align="left"><code>]</code></td> 
<td align="left">Delete last character</td> 
<td align="left"><code>]</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0r</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Delete @ N</td> 
<td align="left"><code>DN</code></td> 
<td align="left">Delete character at position N</td> 
<td align="left"><code>D3</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@sW0rd</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Extract range</td> 
<td align="left"><code>xNM</code></td> 
<td align="left">“Extract M characters starting at position N”</td> 
<td align="left"><code>x04</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ss</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Omit range</td> 
<td align="left"><code>ONM</code></td> 
<td align="left">“Delete M characters starting at position N”</td> 
<td align="left"><code>O12</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>psW0rd</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Insert @ N</td> 
<td align="left"><code>iNX</code></td> 
<td align="left">Insert character X at position N</td> 
<td align="left"><code>i4!</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ss!W0rd</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Overwrite @ N</td> 
<td align="left"><code>oNX</code></td> 
<td align="left">Overwrite character at position N with X</td> 
<td align="left"><code>o3$</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@s$W0rd</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Truncate @ N</td> 
<td align="left"><code>&#39;N</code></td> 
<td align="left">Truncate word at position N</td> 
<td align="left"><code>&#39;6</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Replace</td> 
<td align="left"><code>sXY</code></td> 
<td align="left">Replace all instances of X with Y</td> 
<td align="left"><code>ss$</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@$$W0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Purge</td> 
<td align="left"><code>@X</code></td> 
<td align="left">Purge all instances of X</td> 
<td align="left"><code>@s</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@W0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Duplicate first N</td> 
<td align="left"><code>zN</code></td> 
<td align="left">Duplicate first character N times</td> 
<td align="left"><code>z2</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>ppp@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Duplicate last N</td> 
<td align="left"><code>ZN</code></td> 
<td align="left">Duplicate last character N times</td> 
<td align="left"><code>Z2</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0rddd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Duplicate all</td> 
<td align="left"><code>q</code></td> 
<td align="left">Duplicate every character</td> 
<td align="left"><code>q</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>pp@@ssssWW00rrdd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Extract memory</td> 
<td align="left"><code>XNMI</code></td> 
<td align="left">Insert substring of length M starting from position N of word saved to memory at position I</td> 
<td align="left"><code>lMX428</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssw0rdw0</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Append memory</td> 
<td align="left"><code>4</code></td> 
<td align="left">Append the word saved to memory to current word</td> 
<td align="left"><code>uMl4</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssw0rdP@SSW0RD</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Prepend memory</td> 
<td align="left"><code>6</code></td> 
<td align="left">Prepend the word saved to memory to current word</td> 
<td align="left"><code>rMr6</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>dr0Wss@pp@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Memorize</td> 
<td align="left"><code>M</code></td> 
<td align="left">Memorize current word</td> 
<td align="left"><code>lMuX084</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>P@SSp@ssw0rdW0RD</code></td> 
<td align="left"></td></tr></tbody>`,f=s(),a=n("p"),a.innerHTML="<em>*: Indicates that N starts at 0. For character positions other than 0-9 use A-Z (A=10)</em>"},m(u,h){t(u,d,h),t(u,f,h),t(u,a,h)},p:K,i:K,o:K,d(u){u&&e(d),u&&e(f),u&&e(a)}}}class Ue extends ee{constructor(d){super(),Q(this,d,null,ze,V,{})}}function Ke(i){let d,f,a,u,h,y,T,k,w,b,_,I,M,g,W,E,N,A,C,$,x,R,D,F,P,O,q,S,o,l,m,Z,J,Y,p,H,te,oe,de,le;return T=new Ue({}),W=new G({props:{path:"simplerule_head.cast",options:{rows:15,autoPlay:!1},loopDelay:0}}),x=new G({props:{path:"simplerule_test.cast",options:{rows:15,autoPlay:!1},loopDelay:0}}),te=new G({props:{path:"simplerule_crack.cast"}}),{c(){d=n("h2"),d.textContent="Rules",f=s(),a=n("p"),a.textContent="Rules are a set of predefined rules which can perform mutations on a wordlist (e.g character to number substitutions, letter (de)capitalisation, character replacements). Each line is its own rule and will apply the rule to the password(s) supplied in a wordlist.",u=s(),h=n("p"),h.innerHTML='To understand the rules, we can review the <a href="https://hashcat.net/wiki/doku.php?id=rule_based_attack" rel="nofollow">Hashcat documentation</a>.',y=s(),U(T.$$.fragment),k=s(),w=n("hr"),b=s(),_=n("p"),_.innerHTML="We will use a sample wordlist <code>password.txt</code> which is text file containing the password <code>password</code>.",I=s(),M=n("p"),M.innerHTML="Consider the rule in <code>simplerule.rule</code>, we have some append rules, some capitalisation rules, and a substitution from <code>s</code> to <code>$</code>",g=s(),U(W.$$.fragment),E=s(),N=n("p"),N.innerHTML="Let’s run <code>simplerule.rule</code> and review the results",A=s(),C=n("blockquote"),C.innerHTML="<p><code>hashcat password.txt -r simplerule.rule --stdout</code></p>",$=s(),U(x.$$.fragment),R=s(),D=n("p"),D.innerHTML="Based on the rule <code>$1$2$2</code> (append <code>123</code> at the end of a password), we see a generated password <code>password123</code>.",F=s(),P=n("hr"),O=s(),q=n("p"),q.innerHTML="Let’s create a new rule list <code>labrule.rule</code>, with the rules",S=s(),o=n("ul"),o.innerHTML=`<li>Capitalise the first letter</li> 
<li>Replace <code>s</code> with <code>$</code></li> 
<li>Add <code>!</code> to the end of the password</li>`,l=s(),m=n("blockquote"),m.innerHTML="<p>Solution: <code>c:ss$:$!</code></p>",Z=s(),J=n("hr"),Y=s(),p=n("p"),p.innerHTML="Now let’s try out our new rule list <code>labrule.rule</code> against <code>rockyou.txt</code> to crack <code>simplerule_password.txt</code>",H=s(),U(te.$$.fragment),oe=s(),de=n("p"),de.innerHTML="We can now see the password is <code>Friend$!</code>"},m(r,L){t(r,d,L),t(r,f,L),t(r,a,L),t(r,u,L),t(r,h,L),t(r,y,L),X(T,r,L),t(r,k,L),t(r,w,L),t(r,b,L),t(r,_,L),t(r,I,L),t(r,M,L),t(r,g,L),X(W,r,L),t(r,E,L),t(r,N,L),t(r,A,L),t(r,C,L),t(r,$,L),X(x,r,L),t(r,R,L),t(r,D,L),t(r,F,L),t(r,P,L),t(r,O,L),t(r,q,L),t(r,S,L),t(r,o,L),t(r,l,L),t(r,m,L),t(r,Z,L),t(r,J,L),t(r,Y,L),t(r,p,L),t(r,H,L),X(te,r,L),t(r,oe,L),t(r,de,L),le=!0},p:K,i(r){le||(j(T.$$.fragment,r),j(W.$$.fragment,r),j(x.$$.fragment,r),j(te.$$.fragment,r),le=!0)},o(r){z(T.$$.fragment,r),z(W.$$.fragment,r),z(x.$$.fragment,r),z(te.$$.fragment,r),le=!1},d(r){r&&e(d),r&&e(f),r&&e(a),r&&e(u),r&&e(h),r&&e(y),B(T,r),r&&e(k),r&&e(w),r&&e(b),r&&e(_),r&&e(I),r&&e(M),r&&e(g),B(W,r),r&&e(E),r&&e(N),r&&e(A),r&&e(C),r&&e($),B(x,r),r&&e(R),r&&e(D),r&&e(F),r&&e(P),r&&e(O),r&&e(q),r&&e(S),r&&e(o),r&&e(l),r&&e(m),r&&e(Z),r&&e(J),r&&e(Y),r&&e(p),r&&e(H),B(te,r),r&&e(oe),r&&e(de)}}}class Ze extends ee{constructor(d){super(),Q(this,d,null,Ke,V,{})}}function Ye(i){let d,f,a,u,h,y,T;return{c(){d=n("hr"),f=s(),a=n("blockquote"),a.innerHTML="<h4>🔥 This completes the section on password cracking 🔥</h4>",u=s(),h=n("p"),h.textContent="While we have spent the entire time focusing on cracking NTLM hashes, this type of hash would generally not be common during a forensic investigation.",y=s(),T=n("p"),T.innerHTML=`What is more common is breaking into password-protected ZIP files or Word documents, however the same principles apply.<br/>
We just need to change the <code>-m</code> flag to the correct hash format that we are trying to crack.`},m(k,w){t(k,d,w),t(k,f,w),t(k,a,w),t(k,u,w),t(k,h,w),t(k,y,w),t(k,T,w)},p:K,i:K,o:K,d(k){k&&e(d),k&&e(f),k&&e(a),k&&e(u),k&&e(h),k&&e(y),k&&e(T)}}}class Ge extends ee{constructor(d){super(),Q(this,d,null,Ye,V,{})}}function Je(i){let d,f,a,u,h,y,T,k,w,b,_,I,M,g,W,E,N,A,C,$,x,R,D,F,P,O,q,S;return w=new G({props:{path:"office2john_demo.cast"}}),x=new G({props:{path:"office2john_prepare.cast"}}),q=new G({props:{path:"office2john_crack.cast"}}),{c(){d=n("p"),d.textContent="In order to password crack a ZIP file or a Word document we need to first extract the password hash to be provided to Hashcat.",f=s(),a=n("p"),a.textContent="We will now learn how to extract a password from a password-protected Word document file.",u=s(),h=n("p"),h.innerHTML="The Python script <code>office2john.py</code> is supplied in this tutorial, but is also already available in Kali Linux.",y=s(),T=n("blockquote"),T.innerHTML="<p><code>office2john CTF_Forensic.docx &gt; CTF_Forensic.docx.hash</code></p>",k=s(),U(w.$$.fragment),b=s(),_=n("p"),_.innerHTML="If we review the hash, we can see the hash begins after the filename: <code>$office$*2013*...</code>",I=s(),M=n("p"),M.innerHTML='Looking at the <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">Hashcat documentation</a> for hash modes, we can see that we need to use <code>-m 9600</code> (MS Office 2013)',g=s(),W=n("table"),W.innerHTML=`<thead><tr><th align="center">Hash-Mode</th> 
<th align="center">Hash-Name</th> 
<th align="left">Example</th></tr></thead> 
<tbody><tr><td align="center">9500</td> 
<td align="center">…</td> 
<td align="left">…</td></tr> 
<tr><td align="center">9600</td> 
<td align="center">MS Office 2013</td> 
<td align="left"><code>$office$*2013*100000*256*16*7dd611d...</code></td></tr> 
<tr><td align="center">9700</td> 
<td align="center">…</td> 
<td align="left">…</td></tr></tbody>`,E=s(),N=n("hr"),A=s(),C=n("p"),C.innerHTML=`If you wondered what “john” means in <code>office2john</code>, this is referring to another hash-cracking tool called <a href="https://github.com/openwall/john" rel="nofollow">John the Ripper</a>.<br/>
Whilst both Hashcat and John the Ripper use the same hashes, the input format to provided to each tool is different. In order to crack the MS Office 2013 hash generated from the <code>office2john</code> tool in Hashcat, <strong>we must first remove the filename from the hash file</strong>.`,$=s(),U(x.$$.fragment),R=s(),D=n("p"),D.textContent="Now we can crack the hash",F=s(),P=n("blockquote"),P.innerHTML="<p><code>hashcat -m 9600 CTF_Forensic.docx.hash /usr/share/wordlists/rockyou.txt</code></p>",O=s(),U(q.$$.fragment)},m(o,l){t(o,d,l),t(o,f,l),t(o,a,l),t(o,u,l),t(o,h,l),t(o,y,l),t(o,T,l),t(o,k,l),X(w,o,l),t(o,b,l),t(o,_,l),t(o,I,l),t(o,M,l),t(o,g,l),t(o,W,l),t(o,E,l),t(o,N,l),t(o,A,l),t(o,C,l),t(o,$,l),X(x,o,l),t(o,R,l),t(o,D,l),t(o,F,l),t(o,P,l),t(o,O,l),X(q,o,l),S=!0},p:K,i(o){S||(j(w.$$.fragment,o),j(x.$$.fragment,o),j(q.$$.fragment,o),S=!0)},o(o){z(w.$$.fragment,o),z(x.$$.fragment,o),z(q.$$.fragment,o),S=!1},d(o){o&&e(d),o&&e(f),o&&e(a),o&&e(u),o&&e(h),o&&e(y),o&&e(T),o&&e(k),B(w,o),o&&e(b),o&&e(_),o&&e(I),o&&e(M),o&&e(g),o&&e(W),o&&e(E),o&&e(N),o&&e(A),o&&e(C),o&&e($),B(x,o),o&&e(R),o&&e(D),o&&e(F),o&&e(P),o&&e(O),B(q,o)}}}class Ve extends ee{constructor(d){super(),Q(this,d,null,Je,V,{})}}function Qe(i){let d,f,a,u,h,y,T,k,w,b,_,I,M,g,W,E,N,A,C,$,x,R,D,F,P,O,q,S,o;return{c(){d=n("h2"),d.textContent="Exercises",f=s(),a=n("h3"),a.textContent="Exercise 1",u=s(),h=n("p"),h.textContent="Write a rule list that will",y=s(),T=n("ul"),T.innerHTML=`<li>Capitalise the first letter</li> 
<li>Append <code>1234</code> to the end</li> 
<li>Replace the letter <code>s</code> with <code>$</code></li> 
<li>Replace the letter <code>o</code> with <code>0</code></li>`,k=s(),w=n("p"),w.innerHTML="If the rules are written correctly, the rules applied on <code>password</code> should produce <code>Pa$$w0rd1234</code>",b=s(),_=n("h3"),_.textContent="Exercise 2",I=s(),M=n("blockquote"),M.innerHTML="<p>Crack this NTLM hash <code>B05564D517681DAB0FB8FA64CA97E7CB</code>.</p>",g=s(),W=n("p"),W.textContent="The password is made up (in order) of 1 capital letter, 2 lowercase letters, and 4 numbers.",E=s(),N=n("h3"),N.textContent="Exercise 3",A=s(),C=n("blockquote"),C.innerHTML="<p>Crack this NTLM hash <code>4A537119CEB6F51224DAD23D01CAA45C</code></p>",$=s(),x=n("p"),x.textContent="Hint: Have you been watching your lectures?",R=s(),D=n("h3"),D.textContent="Exercise 4 (Optional)",F=s(),P=n("blockquote"),P.innerHTML="<p>How secure is your own password? <strong>We don’t want your password, don’t submit this</strong></p>",O=s(),q=n("p"),q.innerHTML='Try and crack you own password using wordlist and/or rules, convert to any hash you want using <a href="https://codebeautify.org/ntlm-hash-generator" rel="nofollow">https://codebeautify.org/ntlm-hash-generator</a>',S=s(),o=n("p"),o.innerHTML='Perhaps try the pre-made rule list <a href="https://raw.githubusercontent.com/hashcat/hashcat/master/rules/rockyou-30000.rule" rel="nofollow"><code>rockyou-3000.rule</code></a>'},m(l,m){t(l,d,m),t(l,f,m),t(l,a,m),t(l,u,m),t(l,h,m),t(l,y,m),t(l,T,m),t(l,k,m),t(l,w,m),t(l,b,m),t(l,_,m),t(l,I,m),t(l,M,m),t(l,g,m),t(l,W,m),t(l,E,m),t(l,N,m),t(l,A,m),t(l,C,m),t(l,$,m),t(l,x,m),t(l,R,m),t(l,D,m),t(l,F,m),t(l,P,m),t(l,O,m),t(l,q,m),t(l,S,m),t(l,o,m)},p:K,i:K,o:K,d(l){l&&e(d),l&&e(f),l&&e(a),l&&e(u),l&&e(h),l&&e(y),l&&e(T),l&&e(k),l&&e(w),l&&e(b),l&&e(_),l&&e(I),l&&e(M),l&&e(g),l&&e(W),l&&e(E),l&&e(N),l&&e(A),l&&e(C),l&&e($),l&&e(x),l&&e(R),l&&e(D),l&&e(F),l&&e(P),l&&e(O),l&&e(q),l&&e(S),l&&e(o)}}}class et extends ee{constructor(d){super(),Q(this,d,null,Qe,V,{})}}function tt(i){let d,f,a,u=`<code class="language-undefined">Version: 1.0 (20230611)
Maintainer: Andrew Wong (andrew.j.wong@unsw.edu.au)</code>`,h,y,T='<code class="language-undefined">Special thanks to Wesley Lacy for creating the activity resources</code>',k,w,b,_,I,M,g,W,E,N,A,C,$,x,R,D,F,P,O,q,S;return M=new Oe({}),W=new Re({}),N=new je({}),C=new Be({}),x=new Ze({}),D=new Ge({}),P=new Ve({}),q=new et({}),{c(){d=n("h1"),d.textContent="COMP6845 | Password Cracking",f=s(),a=n("pre"),h=s(),y=n("pre"),k=s(),w=n("p"),w.textContent="In this lab, we will use a combination of scripts to extract password hashes from files and various attacks to crack the password.",b=s(),_=n("hr"),I=s(),U(M.$$.fragment),g=s(),U(W.$$.fragment),E=s(),U(N.$$.fragment),A=s(),U(C.$$.fragment),$=s(),U(x.$$.fragment),R=s(),U(D.$$.fragment),F=s(),U(P.$$.fragment),O=s(),U(q.$$.fragment),fe(a,"class","language-undefined"),fe(y,"class","language-undefined")},m(o,l){t(o,d,l),t(o,f,l),t(o,a,l),a.innerHTML=u,t(o,h,l),t(o,y,l),y.innerHTML=T,t(o,k,l),t(o,w,l),t(o,b,l),t(o,_,l),t(o,I,l),X(M,o,l),t(o,g,l),X(W,o,l),t(o,E,l),X(N,o,l),t(o,A,l),X(C,o,l),t(o,$,l),X(x,o,l),t(o,R,l),X(D,o,l),t(o,F,l),X(P,o,l),t(o,O,l),X(q,o,l),S=!0},p:K,i(o){S||(j(M.$$.fragment,o),j(W.$$.fragment,o),j(N.$$.fragment,o),j(C.$$.fragment,o),j(x.$$.fragment,o),j(D.$$.fragment,o),j(P.$$.fragment,o),j(q.$$.fragment,o),S=!0)},o(o){z(M.$$.fragment,o),z(W.$$.fragment,o),z(N.$$.fragment,o),z(C.$$.fragment,o),z(x.$$.fragment,o),z(D.$$.fragment,o),z(P.$$.fragment,o),z(q.$$.fragment,o),S=!1},d(o){o&&e(d),o&&e(f),o&&e(a),o&&e(h),o&&e(y),o&&e(k),o&&e(w),o&&e(b),o&&e(_),o&&e(I),B(M,o),o&&e(g),B(W,o),o&&e(E),B(N,o),o&&e(A),B(C,o),o&&e($),B(x,o),o&&e(R),B(D,o),o&&e(F),B(P,o),o&&e(O),B(q,o)}}}class lt extends ee{constructor(d){super(),Q(this,d,null,tt,V,{})}}function ot(i){let d,f,a;return f=new lt({}),{c(){d=n("main"),U(f.$$.fragment)},m(u,h){t(u,d,h),X(f,d,null),a=!0},p:K,i(u){a||(j(f.$$.fragment,u),a=!0)},o(u){z(f.$$.fragment,u),a=!1},d(u){u&&e(d),B(f)}}}class dt extends ee{constructor(d){super(),Q(this,d,null,ot,V,{})}}new dt({target:document.getElementById("app")});

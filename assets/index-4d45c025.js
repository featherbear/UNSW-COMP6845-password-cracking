(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const x of m.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&a(x)}).observe(document,{childList:!0,subtree:!0});function r(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function a(u){if(u.ep)return;u.ep=!0;const m=r(u);fetch(u.href,m)}})();function K(){}function be(i){return i()}function he(){return Object.create(null)}function ce(i){i.forEach(be)}function ye(i){return typeof i=="function"}function Y(i,o){return i!=i?o==o:i!==o||i&&typeof i=="object"||typeof i=="function"}function Me(i){return Object.keys(i).length===0}function t(i,o,r){i.insertBefore(o,r||null)}function e(i){i.parentNode&&i.parentNode.removeChild(i)}function f(i){return document.createElement(i)}function Le(i){return document.createTextNode(i)}function n(){return Le(" ")}function oe(i,o,r){r==null?i.removeAttribute(o):i.getAttribute(o)!==r&&i.setAttribute(o,r)}function We(i){return Array.from(i.childNodes)}function ke(i,o,r){i.classList[r?"add":"remove"](o)}let se;function de(i){se=i}function He(){if(!se)throw new Error("Function called outside component initialization");return se}function _e(i){He().$$.on_mount.push(i)}const te=[],me=[];let le=[];const xe=[],Ce=Promise.resolve();let we=!1;function ve(){we||(we=!0,Ce.then(Te))}function $e(i){le.push(i)}const pe=new Set;let ee=0;function Te(){if(ee!==0)return;const i=se;do{try{for(;ee<te.length;){const o=te[ee];ee++,de(o),Ne(o.$$)}}catch(o){throw te.length=0,ee=0,o}for(de(null),te.length=0,ee=0;me.length;)me.pop()();for(let o=0;o<le.length;o+=1){const r=le[o];pe.has(r)||(pe.add(r),r())}le.length=0}while(te.length);for(;xe.length;)xe.pop()();we=!1,pe.clear(),de(i)}function Ne(i){if(i.fragment!==null){i.update(),ce(i.before_update);const o=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,o),i.after_update.forEach($e)}}function qe(i){const o=[],r=[];le.forEach(a=>i.indexOf(a)===-1?o.push(a):r.push(a)),r.forEach(a=>a()),le=o}const re=new Set;let ge;function j(i,o){i&&i.i&&(re.delete(i),i.i(o))}function z(i,o,r,a){if(i&&i.o){if(re.has(i))return;re.add(i),ge.c.push(()=>{re.delete(i),a&&(r&&i.d(1),a())}),i.o(o)}else a&&a()}function U(i){i&&i.c()}function X(i,o,r,a){const{fragment:u,after_update:m}=i.$$;u&&u.m(o,r),a||$e(()=>{const x=i.$$.on_mount.map(be).filter(ye);i.$$.on_destroy?i.$$.on_destroy.push(...x):ce(x),i.$$.on_mount=[]}),m.forEach($e)}function B(i,o){const r=i.$$;r.fragment!==null&&(qe(r.after_update),ce(r.on_destroy),r.fragment&&r.fragment.d(o),r.on_destroy=r.fragment=null,r.ctx=[])}function Ae(i,o){i.$$.dirty[0]===-1&&(te.push(i),ve(),i.$$.dirty.fill(0)),i.$$.dirty[o/31|0]|=1<<o%31}function G(i,o,r,a,u,m,x,T=[-1]){const k=se;de(i);const w=i.$$={fragment:null,ctx:[],props:m,update:K,not_equal:u,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(k?k.$$.context:[])),callbacks:he(),dirty:T,skip_bound:!1,root:o.target||k.$$.root};x&&x(w.root);let _=!1;if(w.ctx=r?r(i,o.props||{},(b,H,...$)=>{const M=$.length?$[0]:H;return w.ctx&&u(w.ctx[b],w.ctx[b]=M)&&(!w.skip_bound&&w.bound[b]&&w.bound[b](M),_&&Ae(i,b)),H}):[],w.update(),_=!0,ce(w.before_update),w.fragment=a?a(w.ctx):!1,o.target){if(o.hydrate){const b=We(o.target);w.fragment&&w.fragment.l(b),b.forEach(e)}else w.fragment&&w.fragment.c();o.intro&&j(i.$$.fragment),X(i,o.target,o.anchor,o.customElement),Te()}de(k)}class J{$destroy(){B(this,1),this.$destroy=K}$on(o,r){if(!ye(r))return K;const a=this.$$.callbacks[o]||(this.$$.callbacks[o]=[]);return a.push(r),()=>{const u=a.indexOf(r);u!==-1&&a.splice(u,1)}}$set(o){this.$$set&&!Me(o)&&(this.$$.skip_bound=!0,this.$$set(o),this.$$.skip_bound=!1)}}function De(i){let o;return{c(){o=f("div"),oe(o,"class","svelte-1h5ldsd"),ke(o,"hover",!i[0])},m(r,a){t(r,o,a),i[5](o)},p(r,[a]){a&1&&ke(o,"hover",!r[0])},i:K,o:K,d(r){r&&e(o),i[5](null)}}}function Pe(i,o,r){let{path:a}=o,{options:u={}}=o,{fixed:m=!1}=o,{loopDelay:x=2e3}=o,T={preload:!0,poster:"npt:10:10",autoPlay:!0},k;_e(()=>{let _=window.AsciinemaPlayer.create("asciinema/recordings/"+a,k,{...T,...u});x&&_.addEventListener("ended",()=>{setTimeout(()=>_.getCurrentTime()==_.getDuration()&&_.play(),x)})});function w(_){me[_?"unshift":"push"](()=>{k=_,r(1,k)})}return i.$$set=_=>{"path"in _&&r(2,a=_.path),"options"in _&&r(3,u=_.options),"fixed"in _&&r(0,m=_.fixed),"loopDelay"in _&&r(4,x=_.loopDelay)},[m,k,a,u,x,w]}class Z extends J{constructor(o){super(),G(this,o,Pe,De,Y,{path:2,options:3,fixed:0,loopDelay:4})}}function Ie(i){let o,r,a,u,m,x,T,k,w,_,b,H,$,M,L,I=`<code class="language-sh"><span class="token builtin class-name">cd</span> /usr/share/wordlists
<span class="token function">ls</span> <span class="token comment"># Note that there is a rockyou.txt.gz file</span>
<span class="token function">sudo</span> gunzip rockyou.txt.gz
<span class="token function">ls</span> <span class="token comment"># You should now see a rockyou.txt</span></code>`,C,A,v;return A=new Z({props:{path:"start.cast",options:{rows:10},fixed:!0}}),{c(){o=f("h2"),o.textContent="Getting Started",r=n(),a=f("p"),a.innerHTML='The resources required for this activity is <a href="https://github.com/featherbear/UNSW-COMP6845-password-cracking/archive/refs/heads/files.zip" rel="nofollow">available for download here</a>',u=n(),m=f("p"),m.innerHTML=`This activity assumes you are running Kali Linux, which already contains the required tools and wordlists to complete the activities.<br/>
If you are not using Kali Linux, ensure you have <a href="https://github.com/hashcat/hashcat" rel="nofollow">Hashcat</a> and <a href="https://sourceforge.net/projects/crunch-wordlist/" rel="nofollow">Crunch</a> installed, as well as a copy of the <a href="https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt" rel="nofollow"><code>rockyou.txt</code></a> wordlist.`,x=n(),T=f("h3"),T.textContent="Hashcat",k=n(),w=f("p"),w.innerHTML=`One of the first things we will do is to run <code>hashcat --help</code> to review the help page as required.<br/>
We will be working our way through the different attack modes of Hashcat.`,_=n(),b=f("h3"),b.textContent="Kali Linux - Prepare the rockyou.txt wordlist",H=n(),$=f("p"),$.innerHTML="An archived copy of <code>rockyou.txt</code> is available on Kali Linux, we must first extract it.",M=n(),L=f("pre"),C=n(),U(A.$$.fragment),oe(L,"class","language-sh")},m(h,y){t(h,o,y),t(h,r,y),t(h,a,y),t(h,u,y),t(h,m,y),t(h,x,y),t(h,T,y),t(h,k,y),t(h,w,y),t(h,_,y),t(h,b,y),t(h,H,y),t(h,$,y),t(h,M,y),t(h,L,y),L.innerHTML=I,t(h,C,y),X(A,h,y),v=!0},p:K,i(h){v||(j(A.$$.fragment,h),v=!0)},o(h){z(A.$$.fragment,h),v=!1},d(h){h&&e(o),h&&e(r),h&&e(a),h&&e(u),h&&e(m),h&&e(x),h&&e(T),h&&e(k),h&&e(w),h&&e(_),h&&e(b),h&&e(H),h&&e($),h&&e(M),h&&e(L),h&&e(C),B(A,h)}}}class Ee extends J{constructor(o){super(),G(this,o,null,Ie,Y,{})}}function Oe(i){let o,r,a,u,m,x,T,k,w,_,b,H;return w=new Z({props:{path:"ntlm.cast"}}),{c(){o=f("h2"),o.textContent="Wordlist Attack",r=n(),a=f("p"),a.textContent="For this first exercise we will use a wordlist attack to crack an NTLM hash using Hashcat.",u=n(),m=f("blockquote"),m.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm.txt /usr/share/wordlists/rockyou.txt</code></p>",x=n(),T=f("ul"),T.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The wordlist to use</li>`,k=n(),U(w.$$.fragment),_=n(),b=f("p"),b.innerHTML="Once complete we can see that for the hash in <code>ntlm.txt</code>, the password is <code>password</code>"},m($,M){t($,o,M),t($,r,M),t($,a,M),t($,u,M),t($,m,M),t($,x,M),t($,T,M),t($,k,M),X(w,$,M),t($,_,M),t($,b,M),H=!0},p:K,i($){H||(j(w.$$.fragment,$),H=!0)},o($){z(w.$$.fragment,$),H=!1},d($){$&&e(o),$&&e(r),$&&e(a),$&&e(u),$&&e(m),$&&e(x),$&&e(T),$&&e(k),B(w,$),$&&e(_),$&&e(b)}}}class Se extends J{constructor(o){super(),G(this,o,null,Oe,Y,{})}}function Re(i){let o,r,a,u,m,x,T,k,w,_=`<code class="language-undefined">?l = abcdefghijklmnopqrstuvwxyz
?u = ABCDEFGHIJKLMNOPQRSTUVWXYZ
?d = 0123456789
?h = 0123456789abcdef
?H = 0123456789ABCDEF
?s = «space»!&quot;#$%&amp;&#39;()*+,-./:;&lt;=&gt;?@[]^_&#96;&#123;|&#125;~
?a = ?l?u?d?s
?b = 0x00 - 0xff
</code>`,b,H,$,M,L,I,C,A,v,h,y,S,D,R,E,O,P,F,q,d,l;return h=new Z({props:{path:"ntlm_password1111.cast"}}),{c(){o=f("h2"),o.textContent="Hybrid Attack",r=n(),a=f("h3"),a.textContent="Introduction",u=n(),m=f("p"),m.innerHTML='Now let’s use a <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">hybrid attack</a> where we will use the <code>rockyou.txt</code> wordlist alongside a <em>mask</em> to append 4 digits after each password.',x=n(),T=f("p"),T.innerHTML='If we look at <a href="https://hashcat.net/wiki/doku.php?id=mask_attack" rel="nofollow">Hashcat documentation</a> you will see we use <code>?d</code> to add a number to the end of each word.',k=n(),w=f("pre"),b=n(),H=f("h3"),H.textContent="Hybrid Wordlist + Brute-force Attack",$=n(),M=f("p"),M.textContent="Run the following in Hashcat",L=n(),I=f("blockquote"),I.innerHTML="<p>$&gt; <code>hashcat -a 6 -m 1000 ntlm_password1111.txt /usr/share/wordlists/rockyou.txt ?d?d?d?d</code></p>",C=n(),A=f("ul"),A.innerHTML=`<li><code>-a 6</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 6 (hybrid attack)</li> 
<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_password1111.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The wordlist to use</li> 
<li><code>?d?d?d?d</code> - The character mask to append</li>`,v=n(),U(h.$$.fragment),y=n(),S=f("p"),S.innerHTML="We can now see the password is <code>password1111</code>",D=n(),R=f("h3"),R.textContent="Hybrid Mask + Wordlist Attack",E=n(),O=f("p"),O.innerHTML="Let’s say we want to crack for a password like <code>1111password</code>. We can instead use attack mode <code>7</code> - a hybrid mask + wordlist attack.",P=n(),F=f("p"),F.innerHTML="e.g. for an NTLM password (<code>-m 1000</code>), we will perform a hybrid mask + wordlist attack (<code>-a 7</code>) with a mask of <code>?d?d?d?d</code> and the <code>rockyou.txt</code> dictionary",q=n(),d=f("blockquote"),d.innerHTML="<p><code>hashcat -a 7 -m 1000 &lt;your_NTLM_hash_file&gt; ?d?d?d?d /usr/share/wordlists/rockyou.txt</code></p>",oe(w,"class","language-undefined")},m(s,N){t(s,o,N),t(s,r,N),t(s,a,N),t(s,u,N),t(s,m,N),t(s,x,N),t(s,T,N),t(s,k,N),t(s,w,N),w.innerHTML=_,t(s,b,N),t(s,H,N),t(s,$,N),t(s,M,N),t(s,L,N),t(s,I,N),t(s,C,N),t(s,A,N),t(s,v,N),X(h,s,N),t(s,y,N),t(s,S,N),t(s,D,N),t(s,R,N),t(s,E,N),t(s,O,N),t(s,P,N),t(s,F,N),t(s,q,N),t(s,d,N),l=!0},p:K,i(s){l||(j(h.$$.fragment,s),l=!0)},o(s){z(h.$$.fragment,s),l=!1},d(s){s&&e(o),s&&e(r),s&&e(a),s&&e(u),s&&e(m),s&&e(x),s&&e(T),s&&e(k),s&&e(w),s&&e(b),s&&e(H),s&&e($),s&&e(M),s&&e(L),s&&e(I),s&&e(C),s&&e(A),s&&e(v),B(h,s),s&&e(y),s&&e(S),s&&e(D),s&&e(R),s&&e(E),s&&e(O),s&&e(P),s&&e(F),s&&e(q),s&&e(d)}}}class Fe extends J{constructor(o){super(),G(this,o,null,Re,Y,{})}}function je(i){let o,r,a,u,m,x,T,k,w,_,b,H,$,M,L,I,C,A,v,h,y,S,D,R,E,O,P,F,q,d,l,s,N,V;return $=new Z({props:{path:"ntlm_bruteforce.cast"}}),l=new Z({props:{path:"ntlm_bruteforce_2.cast"}}),{c(){o=f("h2"),o.textContent="Brute-force-best-force",r=n(),a=f("p"),a.textContent="What if the previous methods didn’t successfully crack the password? We can brute-force the password, but this is generally a last resort given the time it takes (we are trying every possible combination).",u=n(),m=f("blockquote"),m.innerHTML="<p>For this example, we will assume the password is 4 characters long and contains only ASCII characters.</p>",x=n(),T=f("p"),T.innerHTML='We tell Hashcat a password mask to follow when generating inputs. Providing <code>?a</code> (refer to the <a href="https://hashcat.net/wiki/doku.php?id=mask_attack" rel="nofollow">character sets</a>), we provide a combination of lowercase, uppercase, number and special characters from the ASCII character set. <code>?a?a</code> would be a 2-character ASCII password, <code>?a?a?a?a</code> would be a 4-character ASCII password and so on.',k=n(),w=f("blockquote"),w.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce.txt -a 3 ?a?a?a?a</code></p>",_=n(),b=f("ul"),b.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_bruteforce.txt</code> - The hash file to crack</li> 
<li><code>-a 3</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 3 (brute-force attack)</li> 
<li><code>?a?a?a?a</code> - Password mask</li>`,H=n(),U($.$$.fragment),M=n(),L=f("p"),L.innerHTML="We can now see the password is <code>pass</code>",I=n(),C=f("h3"),C.textContent="Brute-force with unknown length",A=n(),v=f("p"),v.textContent="In the previous example (where the password was 4 characters long), if a mask of 8 characters was provided, then Hashcrack wouldn’t (read: will never) successfully crack the password, as the mask provides an explicit length.",h=n(),y=f("p"),y.innerHTML="Now in the scenario where you don’t know the exact length but know that it is at most 5 characters long. To get around this we add the <code>--increment</code> flag which tells Hashcat to start at one character, then keep adding more until we’ve reached our final mask.",S=n(),D=f("blockquote"),D.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce_2.txt -a 3 ?a?a?a?a?a --increment</code></p>",R=n(),E=f("ul"),E.innerHTML="<li>How many passwords does this mask generate? How do you calculate it?</li>",O=n(),P=f("p"),P.innerHTML="We can go a step further and tell Hashcat a minimum password length using <code>--increment-min=N</code>, which tells Hashcat to start at <code>N</code>-character passwords. For our test we will add <code>--increment-min=2</code>  which tell Hashcat to start with 2-character passwords.",F=n(),q=f("blockquote"),q.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce_2.txt -a 3 ?a?a?a?a?a --increment --increment-min=2</code></p>",d=n(),U(l.$$.fragment),s=n(),N=f("p"),N.innerHTML="We can now see the password is <code>p@s</code>"},m(p,g){t(p,o,g),t(p,r,g),t(p,a,g),t(p,u,g),t(p,m,g),t(p,x,g),t(p,T,g),t(p,k,g),t(p,w,g),t(p,_,g),t(p,b,g),t(p,H,g),X($,p,g),t(p,M,g),t(p,L,g),t(p,I,g),t(p,C,g),t(p,A,g),t(p,v,g),t(p,h,g),t(p,y,g),t(p,S,g),t(p,D,g),t(p,R,g),t(p,E,g),t(p,O,g),t(p,P,g),t(p,F,g),t(p,q,g),t(p,d,g),X(l,p,g),t(p,s,g),t(p,N,g),V=!0},p:K,i(p){V||(j($.$$.fragment,p),j(l.$$.fragment,p),V=!0)},o(p){z($.$$.fragment,p),z(l.$$.fragment,p),V=!1},d(p){p&&e(o),p&&e(r),p&&e(a),p&&e(u),p&&e(m),p&&e(x),p&&e(T),p&&e(k),p&&e(w),p&&e(_),p&&e(b),p&&e(H),B($,p),p&&e(M),p&&e(L),p&&e(I),p&&e(C),p&&e(A),p&&e(v),p&&e(h),p&&e(y),p&&e(S),p&&e(D),p&&e(R),p&&e(E),p&&e(O),p&&e(P),p&&e(F),p&&e(q),p&&e(d),B(l,p),p&&e(s),p&&e(N)}}}class Xe extends J{constructor(o){super(),G(this,o,null,je,Y,{})}}function Be(i){let o,r,a,u,m,x,T,k,w,_,b,H=`<code class="language-undefined">crunch version 3.6

Crunch can create a wordlist based on criteria you specify.  The output from crunch can be sent to the screen, file, or to another program.

Usage: crunch &lt;min&gt; &lt;max&gt; [options]
where min and max are numbers

Please refer to the man page for instructions and examples on how to use crunch.</code>`,$,M,L,I,C,A,v,h,y,S,D,R,E,O,P,F,q;return I=new Z({props:{path:"crunch.cast",options:{rows:15}}}),O=new Z({props:{path:"ntlm_rockyou2801.cast"}}),{c(){o=f("h2"),o.textContent="Combination Attacks",r=n(),a=f("p"),a.textContent="For the next attack we are going to try a combination attack using a wordlist and our custom-built wordlist.",u=n(),m=f("p"),m.textContent="In this scenario let’s say we know the password is an English word and the last 4 characters of a password are a digit.",x=n(),T=f("p"),T.textContent="First, we will create a wordlist which has every possible number combination for 4 digits.",k=n(),w=f("p"),w.innerHTML="We will use <code>crunch</code> to do this (already installed in Kali Linux).",_=n(),b=f("pre"),$=n(),M=f("blockquote"),M.innerHTML="<p>$&gt; <code>crunch 4 4 0123456789 -o 4_numbers.txt</code></p>",L=n(),U(I.$$.fragment),C=n(),A=f("p"),A.innerHTML="Once we have created our extra wordlist (<code>4_numbers.txt</code>) we can run the attack with the <code>rockyou.txt</code> wordlist.",v=n(),h=f("p"),h.innerHTML="We will change use attack mode <code>-a 1</code> (combination attack).",y=n(),S=f("blockquote"),S.innerHTML="<p>$&gt; <code>hashcat -a 1 -m 1000 ntlm_rockyou2801.txt /usr/share/wordlists/rockyou.txt 4_numbers.txt</code></p>",D=n(),R=f("ul"),R.innerHTML=`<li><code>-a 3</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 1 (combination attack)</li> 
<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_rockyou2801.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The first part of the combination</li> 
<li><code>4_numbers.txt</code> - The second part of the combination</li>`,E=n(),U(O.$$.fragment),P=n(),F=f("p"),F.innerHTML="We can now see the password is <code>rockyou2801</code>",oe(b,"class","language-undefined")},m(d,l){t(d,o,l),t(d,r,l),t(d,a,l),t(d,u,l),t(d,m,l),t(d,x,l),t(d,T,l),t(d,k,l),t(d,w,l),t(d,_,l),t(d,b,l),b.innerHTML=H,t(d,$,l),t(d,M,l),t(d,L,l),X(I,d,l),t(d,C,l),t(d,A,l),t(d,v,l),t(d,h,l),t(d,y,l),t(d,S,l),t(d,D,l),t(d,R,l),t(d,E,l),X(O,d,l),t(d,P,l),t(d,F,l),q=!0},p:K,i(d){q||(j(I.$$.fragment,d),j(O.$$.fragment,d),q=!0)},o(d){z(I.$$.fragment,d),z(O.$$.fragment,d),q=!1},d(d){d&&e(o),d&&e(r),d&&e(a),d&&e(u),d&&e(m),d&&e(x),d&&e(T),d&&e(k),d&&e(w),d&&e(_),d&&e(b),d&&e($),d&&e(M),d&&e(L),B(I,d),d&&e(C),d&&e(A),d&&e(v),d&&e(h),d&&e(y),d&&e(S),d&&e(D),d&&e(R),d&&e(E),B(O,d),d&&e(P),d&&e(F)}}}class ze extends J{constructor(o){super(),G(this,o,null,Be,Y,{})}}function Ue(i){let o,r,a;return{c(){o=f("table"),o.innerHTML=`<thead><tr><th align="left">Name</th> 
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
<td align="left"></td></tr></tbody>`,r=n(),a=f("p"),a.innerHTML="<em>*: Indicates that N starts at 0. For character positions other than 0-9 use A-Z (A=10)</em>"},m(u,m){t(u,o,m),t(u,r,m),t(u,a,m)},p:K,i:K,o:K,d(u){u&&e(o),u&&e(r),u&&e(a)}}}class Ke extends J{constructor(o){super(),G(this,o,null,Ue,Y,{})}}function Ze(i){let o,r,a,u,m,x,T,k,w,_,b,H,$,M,L,I,C,A,v,h,y,S,D,R,E,O,P,F,q,d,l,s,N,V,p,g,ie,ae,Q,ue,ne,fe;return T=new Ke({}),L=new Z({props:{path:"simplerule_head.cast",options:{rows:15,autoPlay:!1},loopDelay:0}}),y=new Z({props:{path:"simplerule_test.cast",options:{rows:15,autoPlay:!1},loopDelay:0}}),Q=new Z({props:{path:"simplerule_crack.cast"}}),{c(){o=f("h2"),o.textContent="Rules",r=n(),a=f("p"),a.textContent="Rules are a set of predefined rules which can perform mutations on a wordlist (e.g character to number substitutions, letter (de)capitalisation, character replacements). Each line is its own rule and will apply the rule to the password(s) supplied in a wordlist.",u=n(),m=f("p"),m.innerHTML='To understand the rules, we can review the <a href="https://hashcat.net/wiki/doku.php?id=rule_based_attack" rel="nofollow">Hashcat documentation</a>.',x=n(),U(T.$$.fragment),k=n(),w=f("hr"),_=n(),b=f("p"),b.innerHTML="We will use a sample wordlist <code>password.txt</code> which is text file containing the password <code>password</code>.",H=n(),$=f("p"),$.innerHTML="Consider the rule in <code>simplerule.rule</code>, we have some append rules, some capitalisation rules, and a substitution from <code>s</code> to <code>$</code>",M=n(),U(L.$$.fragment),I=n(),C=f("p"),C.innerHTML="Let’s run <code>simplerule.rule</code> and review the results",A=n(),v=f("blockquote"),v.innerHTML="<p>$&gt; <code>hashcat password.txt -r simplerule.rule --stdout</code></p>",h=n(),U(y.$$.fragment),S=n(),D=f("p"),D.innerHTML="Based on the rule <code>$1$2$2</code> (append <code>123</code> at the end of a password), we see a generated password <code>password123</code>.",R=n(),E=f("hr"),O=n(),P=f("p"),P.innerHTML="Let’s create a new rule list <code>labrule.rule</code>, with the rules",F=n(),q=f("ul"),q.innerHTML=`<li>Capitalise the first letter</li> 
<li>Replace <code>s</code> with <code>$</code></li> 
<li>Add <code>!</code> to the end of the password</li>`,d=n(),l=f("blockquote"),l.innerHTML="<p>Solution: <code>c:ss$:$!</code></p>",s=n(),N=f("hr"),V=n(),p=f("p"),p.innerHTML="Now let’s try out our new rule list <code>labrule.rule</code> against <code>rockyou.txt</code> to crack <code>simplerule_password.txt</code>",g=n(),ie=f("blockquote"),ie.innerHTML="<p>$&gt; <code>hashcat -m 1000 simplerule_password.txt /usr/share/wordlists/rockyou.txt -r labrule.rule</code></p>",ae=n(),U(Q.$$.fragment),ue=n(),ne=f("p"),ne.innerHTML="We can now see the password is <code>Friend$!</code>"},m(c,W){t(c,o,W),t(c,r,W),t(c,a,W),t(c,u,W),t(c,m,W),t(c,x,W),X(T,c,W),t(c,k,W),t(c,w,W),t(c,_,W),t(c,b,W),t(c,H,W),t(c,$,W),t(c,M,W),X(L,c,W),t(c,I,W),t(c,C,W),t(c,A,W),t(c,v,W),t(c,h,W),X(y,c,W),t(c,S,W),t(c,D,W),t(c,R,W),t(c,E,W),t(c,O,W),t(c,P,W),t(c,F,W),t(c,q,W),t(c,d,W),t(c,l,W),t(c,s,W),t(c,N,W),t(c,V,W),t(c,p,W),t(c,g,W),t(c,ie,W),t(c,ae,W),X(Q,c,W),t(c,ue,W),t(c,ne,W),fe=!0},p:K,i(c){fe||(j(T.$$.fragment,c),j(L.$$.fragment,c),j(y.$$.fragment,c),j(Q.$$.fragment,c),fe=!0)},o(c){z(T.$$.fragment,c),z(L.$$.fragment,c),z(y.$$.fragment,c),z(Q.$$.fragment,c),fe=!1},d(c){c&&e(o),c&&e(r),c&&e(a),c&&e(u),c&&e(m),c&&e(x),B(T,c),c&&e(k),c&&e(w),c&&e(_),c&&e(b),c&&e(H),c&&e($),c&&e(M),B(L,c),c&&e(I),c&&e(C),c&&e(A),c&&e(v),c&&e(h),B(y,c),c&&e(S),c&&e(D),c&&e(R),c&&e(E),c&&e(O),c&&e(P),c&&e(F),c&&e(q),c&&e(d),c&&e(l),c&&e(s),c&&e(N),c&&e(V),c&&e(p),c&&e(g),c&&e(ie),c&&e(ae),B(Q,c),c&&e(ue),c&&e(ne)}}}class Ye extends J{constructor(o){super(),G(this,o,null,Ze,Y,{})}}function Ge(i){let o,r,a,u,m,x,T;return{c(){o=f("hr"),r=n(),a=f("blockquote"),a.innerHTML="<h4>🔥 This completes the main section on password cracking 🔥</h4>",u=n(),m=f("p"),m.textContent="While we have spent the entire time focusing on cracking NTLM hashes, this type of hash would generally not be common during a forensic investigation.",x=n(),T=f("p"),T.innerHTML=`What is more common is breaking into password-protected ZIP files or Word documents, however the same principles apply.<br/>
We just need to change the <code>-m</code> flag to the correct hash format that we are trying to crack.`},m(k,w){t(k,o,w),t(k,r,w),t(k,a,w),t(k,u,w),t(k,m,w),t(k,x,w),t(k,T,w)},p:K,i:K,o:K,d(k){k&&e(o),k&&e(r),k&&e(a),k&&e(u),k&&e(m),k&&e(x),k&&e(T)}}}class Je extends J{constructor(o){super(),G(this,o,null,Ge,Y,{})}}function Ve(i){let o,r,a,u,m,x,T,k,w,_,b,H,$,M,L,I,C,A,v,h,y,S,D,R,E,O,P,F,q,d;return b=new Z({props:{path:"office2john_demo.cast"}}),D=new Z({props:{path:"office2john_prepare.cast"}}),q=new Z({props:{path:"office2john_crack.cast"}}),{c(){o=f("h2"),o.textContent="Cracking other hashes",r=n(),a=f("p"),a.textContent="In order to password crack a ZIP file or a Word document we need to first extract the password hash to be provided to Hashcat.",u=n(),m=f("p"),m.textContent="We will now learn how to extract a password from a password-protected Word document file.",x=n(),T=f("p"),T.innerHTML="The Python script <code>office2john.py</code> is supplied in this tutorial, but is also already available in Kali Linux.",k=n(),w=f("blockquote"),w.innerHTML="<p>$&gt; <code>office2john CTF_Forensic.docx &gt; CTF_Forensic.docx.hash</code></p>",_=n(),U(b.$$.fragment),H=n(),$=f("p"),$.innerHTML="If we review the hash, we can see the hash begins after the filename: <code>$office$*2013*...</code>",M=n(),L=f("p"),L.innerHTML='Looking at the <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">Hashcat documentation</a> for hash modes, we can see that we need to use <code>-m 9600</code> (MS Office 2013)',I=n(),C=f("table"),C.innerHTML=`<thead><tr><th align="center">Hash-Mode</th> 
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
<td align="left">…</td></tr></tbody>`,A=n(),v=f("hr"),h=n(),y=f("p"),y.innerHTML=`If you wondered what “john” means in <code>office2john</code>, this is referring to another hash-cracking tool called <a href="https://github.com/openwall/john" rel="nofollow">John the Ripper</a>.<br/>
Whilst both Hashcat and John the Ripper use the same hashes, the input format to provided to each tool is different. In order to crack the MS Office 2013 hash generated from the <code>office2john</code> tool in Hashcat, <strong>we must first remove the filename from the hash file</strong>.`,S=n(),U(D.$$.fragment),R=n(),E=f("p"),E.textContent="Now we can crack the hash",O=n(),P=f("blockquote"),P.innerHTML="<p>$&gt; <code>hashcat -m 9600 CTF_Forensic.docx.hash /usr/share/wordlists/rockyou.txt</code></p>",F=n(),U(q.$$.fragment)},m(l,s){t(l,o,s),t(l,r,s),t(l,a,s),t(l,u,s),t(l,m,s),t(l,x,s),t(l,T,s),t(l,k,s),t(l,w,s),t(l,_,s),X(b,l,s),t(l,H,s),t(l,$,s),t(l,M,s),t(l,L,s),t(l,I,s),t(l,C,s),t(l,A,s),t(l,v,s),t(l,h,s),t(l,y,s),t(l,S,s),X(D,l,s),t(l,R,s),t(l,E,s),t(l,O,s),t(l,P,s),t(l,F,s),X(q,l,s),d=!0},p:K,i(l){d||(j(b.$$.fragment,l),j(D.$$.fragment,l),j(q.$$.fragment,l),d=!0)},o(l){z(b.$$.fragment,l),z(D.$$.fragment,l),z(q.$$.fragment,l),d=!1},d(l){l&&e(o),l&&e(r),l&&e(a),l&&e(u),l&&e(m),l&&e(x),l&&e(T),l&&e(k),l&&e(w),l&&e(_),B(b,l),l&&e(H),l&&e($),l&&e(M),l&&e(L),l&&e(I),l&&e(C),l&&e(A),l&&e(v),l&&e(h),l&&e(y),l&&e(S),B(D,l),l&&e(R),l&&e(E),l&&e(O),l&&e(P),l&&e(F),B(q,l)}}}class Qe extends J{constructor(o){super(),G(this,o,null,Ve,Y,{})}}function et(i){let o,r,a,u,m,x,T,k,w,_,b,H,$,M,L,I,C,A,v,h,y,S,D,R,E,O,P,F,q;return{c(){o=f("h2"),o.textContent="Exercises",r=n(),a=f("h3"),a.textContent="Exercise 1",u=n(),m=f("p"),m.textContent="Write a rule list that will",x=n(),T=f("ul"),T.innerHTML=`<li>Capitalise the first letter</li> 
<li>Append <code>1234</code> to the end</li> 
<li>Replace the letter <code>s</code> with <code>$</code></li> 
<li>Replace the letter <code>o</code> with <code>0</code></li>`,k=n(),w=f("p"),w.innerHTML="If the rules are written correctly, the rules applied on <code>password</code> should produce <code>Pa$$w0rd1234</code>",_=n(),b=f("h3"),b.textContent="Exercise 2",H=n(),$=f("blockquote"),$.innerHTML="<p>Crack this NTLM hash <code>B05564D517681DAB0FB8FA64CA97E7CB</code>.</p>",M=n(),L=f("p"),L.textContent="The password is made up (in order) of 1 capital letter, 2 lowercase letters, and 4 numbers.",I=n(),C=f("h3"),C.textContent="Exercise 3",A=n(),v=f("blockquote"),v.innerHTML="<p>Crack this NTLM hash <code>4A537119CEB6F51224DAD23D01CAA45C</code></p>",h=n(),y=f("p"),y.textContent="Hint: Have you been watching your lectures?",S=n(),D=f("h3"),D.textContent="Exercise 4 (Optional)",R=n(),E=f("blockquote"),E.innerHTML="<p>How secure is your own password? <strong>We don’t want your password, don’t submit this</strong></p>",O=n(),P=f("p"),P.innerHTML='Try and crack you own password using wordlist and/or rules, convert to any hash you want using <a href="https://codebeautify.org/ntlm-hash-generator" rel="nofollow">https://codebeautify.org/ntlm-hash-generator</a>',F=n(),q=f("p"),q.innerHTML='Perhaps try the pre-made rule list <a href="https://raw.githubusercontent.com/hashcat/hashcat/master/rules/rockyou-30000.rule" rel="nofollow"><code>rockyou-3000.rule</code></a>'},m(d,l){t(d,o,l),t(d,r,l),t(d,a,l),t(d,u,l),t(d,m,l),t(d,x,l),t(d,T,l),t(d,k,l),t(d,w,l),t(d,_,l),t(d,b,l),t(d,H,l),t(d,$,l),t(d,M,l),t(d,L,l),t(d,I,l),t(d,C,l),t(d,A,l),t(d,v,l),t(d,h,l),t(d,y,l),t(d,S,l),t(d,D,l),t(d,R,l),t(d,E,l),t(d,O,l),t(d,P,l),t(d,F,l),t(d,q,l)},p:K,i:K,o:K,d(d){d&&e(o),d&&e(r),d&&e(a),d&&e(u),d&&e(m),d&&e(x),d&&e(T),d&&e(k),d&&e(w),d&&e(_),d&&e(b),d&&e(H),d&&e($),d&&e(M),d&&e(L),d&&e(I),d&&e(C),d&&e(A),d&&e(v),d&&e(h),d&&e(y),d&&e(S),d&&e(D),d&&e(R),d&&e(E),d&&e(O),d&&e(P),d&&e(F),d&&e(q)}}}class tt extends J{constructor(o){super(),G(this,o,null,et,Y,{})}}function lt(i){let o,r,a,u=`<code class="language-undefined">Version: 1.0 (20230611)
Maintainer: Andrew Wong (andrew.j.wong@unsw.edu.au)</code>`,m,x,T='<code class="language-undefined">Special thanks to Wesley Lacy for creating the activity resources</code>',k,w,_,b,H,$,M,L,I,C,A,v,h,y,S,D,R,E,O,P,F,q,d;return $=new Ee({}),L=new Se({}),C=new Fe({}),v=new Xe({}),y=new ze({}),D=new Ye({}),E=new Je({}),P=new Qe({}),q=new tt({}),{c(){o=f("h1"),o.textContent="COMP6845 | Password Cracking",r=n(),a=f("pre"),m=n(),x=f("pre"),k=n(),w=f("p"),w.textContent="In this lab, we will use a combination of scripts to extract password hashes from files and various attacks to crack the password.",_=n(),b=f("hr"),H=n(),U($.$$.fragment),M=n(),U(L.$$.fragment),I=n(),U(C.$$.fragment),A=n(),U(v.$$.fragment),h=n(),U(y.$$.fragment),S=n(),U(D.$$.fragment),R=n(),U(E.$$.fragment),O=n(),U(P.$$.fragment),F=n(),U(q.$$.fragment),oe(a,"class","language-undefined"),oe(x,"class","language-undefined")},m(l,s){t(l,o,s),t(l,r,s),t(l,a,s),a.innerHTML=u,t(l,m,s),t(l,x,s),x.innerHTML=T,t(l,k,s),t(l,w,s),t(l,_,s),t(l,b,s),t(l,H,s),X($,l,s),t(l,M,s),X(L,l,s),t(l,I,s),X(C,l,s),t(l,A,s),X(v,l,s),t(l,h,s),X(y,l,s),t(l,S,s),X(D,l,s),t(l,R,s),X(E,l,s),t(l,O,s),X(P,l,s),t(l,F,s),X(q,l,s),d=!0},p:K,i(l){d||(j($.$$.fragment,l),j(L.$$.fragment,l),j(C.$$.fragment,l),j(v.$$.fragment,l),j(y.$$.fragment,l),j(D.$$.fragment,l),j(E.$$.fragment,l),j(P.$$.fragment,l),j(q.$$.fragment,l),d=!0)},o(l){z($.$$.fragment,l),z(L.$$.fragment,l),z(C.$$.fragment,l),z(v.$$.fragment,l),z(y.$$.fragment,l),z(D.$$.fragment,l),z(E.$$.fragment,l),z(P.$$.fragment,l),z(q.$$.fragment,l),d=!1},d(l){l&&e(o),l&&e(r),l&&e(a),l&&e(m),l&&e(x),l&&e(k),l&&e(w),l&&e(_),l&&e(b),l&&e(H),B($,l),l&&e(M),B(L,l),l&&e(I),B(C,l),l&&e(A),B(v,l),l&&e(h),B(y,l),l&&e(S),B(D,l),l&&e(R),B(E,l),l&&e(O),B(P,l),l&&e(F),B(q,l)}}}function ot(i){return _e(()=>{document.querySelectorAll("blockquote").forEach(o=>{o.textContent.startsWith("$> ")&&o.style.setProperty("--leftLineColour","#21b0d7")})}),[]}class dt extends J{constructor(o){super(),G(this,o,ot,lt,Y,{})}}function st(i){let o,r,a;return r=new dt({}),{c(){o=f("main"),U(r.$$.fragment)},m(u,m){t(u,o,m),X(r,o,null),a=!0},p:K,i(u){a||(j(r.$$.fragment,u),a=!0)},o(u){z(r.$$.fragment,u),a=!1},d(u){u&&e(o),B(r)}}}class it extends J{constructor(o){super(),G(this,o,null,st,Y,{})}}new it({target:document.getElementById("app")});

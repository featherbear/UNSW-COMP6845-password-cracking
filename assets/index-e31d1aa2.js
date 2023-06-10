(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const w of u)if(w.type==="childList")for(const b of w.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function f(u){const w={};return u.integrity&&(w.integrity=u.integrity),u.referrerPolicy&&(w.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?w.credentials="include":u.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function c(u){if(u.ep)return;u.ep=!0;const w=f(u);fetch(u.href,w)}})();function K(){}function be(s){return s()}function $e(){return Object.create(null)}function ce(s){s.forEach(be)}function ye(s){return typeof s=="function"}function V(s,o){return s!=s?o==o:s!==o||s&&typeof s=="object"||typeof s=="function"}function Le(s){return Object.keys(s).length===0}function t(s,o,f){s.insertBefore(o,f||null)}function e(s){s.parentNode&&s.parentNode.removeChild(s)}function r(s){return document.createElement(s)}function Me(s){return document.createTextNode(s)}function n(){return Me(" ")}function oe(s,o,f){f==null?s.removeAttribute(o):s.getAttribute(o)!==f&&s.setAttribute(o,f)}function We(s){return Array.from(s.childNodes)}function ke(s,o,f){s.classList[f?"add":"remove"](o)}let ie;function de(s){ie=s}function He(){if(!ie)throw new Error("Function called outside component initialization");return ie}function _e(s){He().$$.on_mount.push(s)}const te=[],me=[];let le=[];const xe=[],Ce=Promise.resolve();let we=!1;function ve(){we||(we=!0,Ce.then(Te))}function he(s){le.push(s)}const pe=new Set;let ee=0;function Te(){if(ee!==0)return;const s=ie;do{try{for(;ee<te.length;){const o=te[ee];ee++,de(o),Ne(o.$$)}}catch(o){throw te.length=0,ee=0,o}for(de(null),te.length=0,ee=0;me.length;)me.pop()();for(let o=0;o<le.length;o+=1){const f=le[o];pe.has(f)||(pe.add(f),f())}le.length=0}while(te.length);for(;xe.length;)xe.pop()();we=!1,pe.clear(),de(s)}function Ne(s){if(s.fragment!==null){s.update(),ce(s.before_update);const o=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,o),s.after_update.forEach(he)}}function ge(s){const o=[],f=[];le.forEach(c=>s.indexOf(c)===-1?o.push(c):f.push(c)),f.forEach(c=>c()),le=o}const fe=new Set;let qe;function j(s,o){s&&s.i&&(fe.delete(s),s.i(o))}function z(s,o,f,c){if(s&&s.o){if(fe.has(s))return;fe.add(s),qe.c.push(()=>{fe.delete(s),c&&(f&&s.d(1),c())}),s.o(o)}else c&&c()}function U(s){s&&s.c()}function X(s,o,f,c){const{fragment:u,after_update:w}=s.$$;u&&u.m(o,f),c||he(()=>{const b=s.$$.on_mount.map(be).filter(ye);s.$$.on_destroy?s.$$.on_destroy.push(...b):ce(b),s.$$.on_mount=[]}),w.forEach(he)}function B(s,o){const f=s.$$;f.fragment!==null&&(ge(f.after_update),ce(f.on_destroy),f.fragment&&f.fragment.d(o),f.on_destroy=f.fragment=null,f.ctx=[])}function Ae(s,o){s.$$.dirty[0]===-1&&(te.push(s),ve(),s.$$.dirty.fill(0)),s.$$.dirty[o/31|0]|=1<<o%31}function Y(s,o,f,c,u,w,b,_=[-1]){const k=ie;de(s);const h=s.$$={fragment:null,ctx:[],props:w,update:K,not_equal:u,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(k?k.$$.context:[])),callbacks:$e(),dirty:_,skip_bound:!1,root:o.target||k.$$.root};b&&b(h.root);let T=!1;if(h.ctx=f?f(s,o.props||{},(x,M,...m)=>{const L=m.length?m[0]:M;return h.ctx&&u(h.ctx[x],h.ctx[x]=L)&&(!h.skip_bound&&h.bound[x]&&h.bound[x](L),T&&Ae(s,x)),M}):[],h.update(),T=!0,ce(h.before_update),h.fragment=c?c(h.ctx):!1,o.target){if(o.hydrate){const x=We(o.target);h.fragment&&h.fragment.l(x),x.forEach(e)}else h.fragment&&h.fragment.c();o.intro&&j(s.$$.fragment),X(s,o.target,o.anchor,o.customElement),Te()}de(k)}class G{$destroy(){B(this,1),this.$destroy=K}$on(o,f){if(!ye(f))return K;const c=this.$$.callbacks[o]||(this.$$.callbacks[o]=[]);return c.push(f),()=>{const u=c.indexOf(f);u!==-1&&c.splice(u,1)}}$set(o){this.$$set&&!Le(o)&&(this.$$.skip_bound=!0,this.$$set(o),this.$$.skip_bound=!1)}}function De(s){let o;return{c(){o=r("div"),oe(o,"class","svelte-1h5ldsd"),ke(o,"hover",!s[0])},m(f,c){t(f,o,c),s[5](o)},p(f,[c]){c&1&&ke(o,"hover",!f[0])},i:K,o:K,d(f){f&&e(o),s[5](null)}}}function Pe(s){const o=s.getBoundingClientRect(),f=window.innerHeight||document.documentElement.clientHeight;return o.top*1.05<=f&&o.left>=0&&o.right<=(window.innerWidth||document.documentElement.clientWidth)}function Ee(s,o,f){let{path:c}=o,{options:u={}}=o,{fixed:w=!1}=o,{loopDelay:b=2e3}=o,_={preload:!0,poster:"npt:10:10",autoPlay:!0},k;_e(()=>{let T={..._,...u},x=!1;T.autoPlay&&(T.autoPlay=!1,x=!0);let M=window.AsciinemaPlayer.create("asciinema/recordings/"+c,k,T);if(b&&(console.debug("Attaching end-listener for "+c),M.addEventListener("ended",()=>{setTimeout(()=>M.getCurrentTime()==M.getDuration()&&M.play(),b)})),x){console.debug("Attaching scroll-listener for "+c);const m=function(){Pe(k)&&x&&(console.debug("Scroll event triggered for "+c),document.removeEventListener("scroll",m),x=!1,M.play())};document.addEventListener("scroll",m,{passive:!0}),m()}});function h(T){me[T?"unshift":"push"](()=>{k=T,f(1,k)})}return s.$$set=T=>{"path"in T&&f(2,c=T.path),"options"in T&&f(3,u=T.options),"fixed"in T&&f(0,w=T.fixed),"loopDelay"in T&&f(4,b=T.loopDelay)},[w,k,c,u,b,h]}class Z extends G{constructor(o){super(),Y(this,o,Ee,De,V,{path:2,options:3,fixed:0,loopDelay:4})}}function Ie(s){let o,f,c,u,w,b,_,k,h,T,x,M,m,L,W,E=`<code class="language-sh"><span class="token builtin class-name">cd</span> /usr/share/wordlists
<span class="token function">ls</span> <span class="token comment"># Note that there is a rockyou.txt.gz file</span>
<span class="token function">sudo</span> gunzip rockyou.txt.gz
<span class="token function">ls</span> <span class="token comment"># You should now see a rockyou.txt</span></code>`,C,A,v;return A=new Z({props:{path:"start.cast",options:{rows:10},fixed:!0}}),{c(){o=r("h2"),o.textContent="Getting Started",f=n(),c=r("p"),c.innerHTML='The resources required for this activity is <a href="https://github.com/featherbear/UNSW-COMP6845-password-cracking/archive/refs/heads/files.zip" rel="nofollow">available for download here</a>',u=n(),w=r("p"),w.innerHTML=`This activity assumes you are running Kali Linux, which already contains the required tools and wordlists to complete the activities.<br/>
If you are not using Kali Linux, ensure you have <a href="https://github.com/hashcat/hashcat" rel="nofollow">Hashcat</a> and <a href="https://sourceforge.net/projects/crunch-wordlist/" rel="nofollow">Crunch</a> installed, as well as a copy of the <a href="https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt" rel="nofollow"><code>rockyou.txt</code></a> wordlist.`,b=n(),_=r("h3"),_.textContent="Hashcat",k=n(),h=r("p"),h.innerHTML=`One of the first things we will do is to run <code>hashcat --help</code> to review the help page as required.<br/>
We will be working our way through the different attack modes of Hashcat.`,T=n(),x=r("h3"),x.textContent="Kali Linux - Prepare the rockyou.txt wordlist",M=n(),m=r("p"),m.innerHTML="An archived copy of <code>rockyou.txt</code> is available on Kali Linux, we must first extract it.",L=n(),W=r("pre"),C=n(),U(A.$$.fragment),oe(W,"class","language-sh")},m($,y){t($,o,y),t($,f,y),t($,c,y),t($,u,y),t($,w,y),t($,b,y),t($,_,y),t($,k,y),t($,h,y),t($,T,y),t($,x,y),t($,M,y),t($,m,y),t($,L,y),t($,W,y),W.innerHTML=E,t($,C,y),X(A,$,y),v=!0},p:K,i($){v||(j(A.$$.fragment,$),v=!0)},o($){z(A.$$.fragment,$),v=!1},d($){$&&e(o),$&&e(f),$&&e(c),$&&e(u),$&&e(w),$&&e(b),$&&e(_),$&&e(k),$&&e(h),$&&e(T),$&&e(x),$&&e(M),$&&e(m),$&&e(L),$&&e(W),$&&e(C),B(A,$)}}}class Oe extends G{constructor(o){super(),Y(this,o,null,Ie,V,{})}}function Se(s){let o,f,c,u,w,b,_,k,h,T,x,M;return h=new Z({props:{path:"ntlm.cast"}}),{c(){o=r("h2"),o.textContent="Wordlist Attack",f=n(),c=r("p"),c.textContent="For this first exercise we will use a wordlist attack to crack an NTLM hash using Hashcat.",u=n(),w=r("blockquote"),w.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm.txt /usr/share/wordlists/rockyou.txt</code></p>",b=n(),_=r("ul"),_.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The wordlist to use</li>`,k=n(),U(h.$$.fragment),T=n(),x=r("p"),x.innerHTML="Once complete we can see that for the hash in <code>ntlm.txt</code>, the password is <code>password</code>"},m(m,L){t(m,o,L),t(m,f,L),t(m,c,L),t(m,u,L),t(m,w,L),t(m,b,L),t(m,_,L),t(m,k,L),X(h,m,L),t(m,T,L),t(m,x,L),M=!0},p:K,i(m){M||(j(h.$$.fragment,m),M=!0)},o(m){z(h.$$.fragment,m),M=!1},d(m){m&&e(o),m&&e(f),m&&e(c),m&&e(u),m&&e(w),m&&e(b),m&&e(_),m&&e(k),B(h,m),m&&e(T),m&&e(x)}}}class Re extends G{constructor(o){super(),Y(this,o,null,Se,V,{})}}function Fe(s){let o,f,c,u,w,b,_,k,h,T=`<code class="language-undefined">?l = abcdefghijklmnopqrstuvwxyz
?u = ABCDEFGHIJKLMNOPQRSTUVWXYZ
?d = 0123456789
?h = 0123456789abcdef
?H = 0123456789ABCDEF
?s = «space»!&quot;#$%&amp;&#39;()*+,-./:;&lt;=&gt;?@[]^_&#96;&#123;|&#125;~
?a = ?l?u?d?s
?b = 0x00 - 0xff
</code>`,x,M,m,L,W,E,C,A,v,$,y,S,D,R,I,O,P,F,g,d,l;return $=new Z({props:{path:"ntlm_password1111.cast"}}),{c(){o=r("h2"),o.textContent="Hybrid Attack",f=n(),c=r("h3"),c.textContent="Introduction",u=n(),w=r("p"),w.innerHTML='Now let’s use a <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">hybrid attack</a> where we will use the <code>rockyou.txt</code> wordlist alongside a <em>mask</em> to append 4 digits after each password.',b=n(),_=r("p"),_.innerHTML='If we look at <a href="https://hashcat.net/wiki/doku.php?id=mask_attack" rel="nofollow">Hashcat documentation</a> you will see we use <code>?d</code> to add a number to the end of each word.',k=n(),h=r("pre"),x=n(),M=r("h3"),M.textContent="Hybrid Wordlist + Brute-force Attack",m=n(),L=r("p"),L.textContent="Run the following in Hashcat",W=n(),E=r("blockquote"),E.innerHTML="<p>$&gt; <code>hashcat -a 6 -m 1000 ntlm_password1111.txt /usr/share/wordlists/rockyou.txt ?d?d?d?d</code></p>",C=n(),A=r("ul"),A.innerHTML=`<li><code>-a 6</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 6 (hybrid attack)</li> 
<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_password1111.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The wordlist to use</li> 
<li><code>?d?d?d?d</code> - The character mask to append</li>`,v=n(),U($.$$.fragment),y=n(),S=r("p"),S.innerHTML="We can now see the password is <code>password1111</code>",D=n(),R=r("h3"),R.textContent="Hybrid Mask + Wordlist Attack",I=n(),O=r("p"),O.innerHTML="Let’s say we want to crack for a password like <code>1111password</code>. We can instead use attack mode <code>7</code> - a hybrid mask + wordlist attack.",P=n(),F=r("p"),F.innerHTML="e.g. for an NTLM password (<code>-m 1000</code>), we will perform a hybrid mask + wordlist attack (<code>-a 7</code>) with a mask of <code>?d?d?d?d</code> and the <code>rockyou.txt</code> dictionary",g=n(),d=r("blockquote"),d.innerHTML="<p><code>hashcat -a 7 -m 1000 &lt;your_NTLM_hash_file&gt; ?d?d?d?d /usr/share/wordlists/rockyou.txt</code></p>",oe(h,"class","language-undefined")},m(i,N){t(i,o,N),t(i,f,N),t(i,c,N),t(i,u,N),t(i,w,N),t(i,b,N),t(i,_,N),t(i,k,N),t(i,h,N),h.innerHTML=T,t(i,x,N),t(i,M,N),t(i,m,N),t(i,L,N),t(i,W,N),t(i,E,N),t(i,C,N),t(i,A,N),t(i,v,N),X($,i,N),t(i,y,N),t(i,S,N),t(i,D,N),t(i,R,N),t(i,I,N),t(i,O,N),t(i,P,N),t(i,F,N),t(i,g,N),t(i,d,N),l=!0},p:K,i(i){l||(j($.$$.fragment,i),l=!0)},o(i){z($.$$.fragment,i),l=!1},d(i){i&&e(o),i&&e(f),i&&e(c),i&&e(u),i&&e(w),i&&e(b),i&&e(_),i&&e(k),i&&e(h),i&&e(x),i&&e(M),i&&e(m),i&&e(L),i&&e(W),i&&e(E),i&&e(C),i&&e(A),i&&e(v),B($,i),i&&e(y),i&&e(S),i&&e(D),i&&e(R),i&&e(I),i&&e(O),i&&e(P),i&&e(F),i&&e(g),i&&e(d)}}}class je extends G{constructor(o){super(),Y(this,o,null,Fe,V,{})}}function Xe(s){let o,f,c,u,w,b,_,k,h,T,x,M,m,L,W,E,C,A,v,$,y,S,D,R,I,O,P,F,g,d,l,i,N,J;return m=new Z({props:{path:"ntlm_bruteforce.cast"}}),l=new Z({props:{path:"ntlm_bruteforce_2.cast"}}),{c(){o=r("h2"),o.textContent="Brute-force-best-force",f=n(),c=r("p"),c.textContent="What if the previous methods didn’t successfully crack the password? We can brute-force the password, but this is generally a last resort given the time it takes (we are trying every possible combination).",u=n(),w=r("blockquote"),w.innerHTML="<p>For this example, we will assume the password is 4 characters long and contains only ASCII characters.</p>",b=n(),_=r("p"),_.innerHTML='We tell Hashcat a password mask to follow when generating inputs. Providing <code>?a</code> (refer to the <a href="https://hashcat.net/wiki/doku.php?id=mask_attack" rel="nofollow">character sets</a>), we provide a combination of lowercase, uppercase, number and special characters from the ASCII character set. <code>?a?a</code> would be a 2-character ASCII password, <code>?a?a?a?a</code> would be a 4-character ASCII password and so on.',k=n(),h=r("blockquote"),h.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce.txt -a 3 ?a?a?a?a</code></p>",T=n(),x=r("ul"),x.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_bruteforce.txt</code> - The hash file to crack</li> 
<li><code>-a 3</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 3 (brute-force attack)</li> 
<li><code>?a?a?a?a</code> - Password mask</li>`,M=n(),U(m.$$.fragment),L=n(),W=r("p"),W.innerHTML="We can now see the password is <code>pass</code>",E=n(),C=r("h3"),C.textContent="Brute-force with unknown length",A=n(),v=r("p"),v.textContent="In the previous example (where the password was 4 characters long), if a mask of 8 characters was provided, then Hashcrack wouldn’t (read: will never) successfully crack the password, as the mask provides an explicit length.",$=n(),y=r("p"),y.innerHTML="Now in the scenario where you don’t know the exact length but know that it is at most 5 characters long. To get around this we add the <code>--increment</code> flag which tells Hashcat to start at one character, then keep adding more until we’ve reached our final mask.",S=n(),D=r("blockquote"),D.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce_2.txt -a 3 ?a?a?a?a?a --increment</code></p>",R=n(),I=r("ul"),I.innerHTML="<li>How many passwords does this mask generate? How do you calculate it?</li>",O=n(),P=r("p"),P.innerHTML="We can go a step further and tell Hashcat a minimum password length using <code>--increment-min=N</code>, which tells Hashcat to start at <code>N</code>-character passwords. For our test we will add <code>--increment-min=2</code>  which tell Hashcat to start with 2-character passwords.",F=n(),g=r("blockquote"),g.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce_2.txt -a 3 ?a?a?a?a?a --increment --increment-min=2</code></p>",d=n(),U(l.$$.fragment),i=n(),N=r("p"),N.innerHTML="We can now see the password is <code>p@s</code>"},m(p,q){t(p,o,q),t(p,f,q),t(p,c,q),t(p,u,q),t(p,w,q),t(p,b,q),t(p,_,q),t(p,k,q),t(p,h,q),t(p,T,q),t(p,x,q),t(p,M,q),X(m,p,q),t(p,L,q),t(p,W,q),t(p,E,q),t(p,C,q),t(p,A,q),t(p,v,q),t(p,$,q),t(p,y,q),t(p,S,q),t(p,D,q),t(p,R,q),t(p,I,q),t(p,O,q),t(p,P,q),t(p,F,q),t(p,g,q),t(p,d,q),X(l,p,q),t(p,i,q),t(p,N,q),J=!0},p:K,i(p){J||(j(m.$$.fragment,p),j(l.$$.fragment,p),J=!0)},o(p){z(m.$$.fragment,p),z(l.$$.fragment,p),J=!1},d(p){p&&e(o),p&&e(f),p&&e(c),p&&e(u),p&&e(w),p&&e(b),p&&e(_),p&&e(k),p&&e(h),p&&e(T),p&&e(x),p&&e(M),B(m,p),p&&e(L),p&&e(W),p&&e(E),p&&e(C),p&&e(A),p&&e(v),p&&e($),p&&e(y),p&&e(S),p&&e(D),p&&e(R),p&&e(I),p&&e(O),p&&e(P),p&&e(F),p&&e(g),p&&e(d),B(l,p),p&&e(i),p&&e(N)}}}class Be extends G{constructor(o){super(),Y(this,o,null,Xe,V,{})}}function ze(s){let o,f,c,u,w,b,_,k,h,T,x,M=`<code class="language-undefined">crunch version 3.6

Crunch can create a wordlist based on criteria you specify.  The output from crunch can be sent to the screen, file, or to another program.

Usage: crunch &lt;min&gt; &lt;max&gt; [options]
where min and max are numbers

Please refer to the man page for instructions and examples on how to use crunch.</code>`,m,L,W,E,C,A,v,$,y,S,D,R,I,O,P,F,g;return E=new Z({props:{path:"crunch.cast",options:{rows:15}}}),O=new Z({props:{path:"ntlm_rockyou2801.cast"}}),{c(){o=r("h2"),o.textContent="Combination Attacks",f=n(),c=r("p"),c.textContent="For the next attack we are going to try a combination attack using a wordlist and our custom-built wordlist.",u=n(),w=r("p"),w.textContent="In this scenario let’s say we know the password is an English word and the last 4 characters of a password are a digit.",b=n(),_=r("p"),_.textContent="First, we will create a wordlist which has every possible number combination for 4 digits.",k=n(),h=r("p"),h.innerHTML="We will use <code>crunch</code> to do this (already installed in Kali Linux).",T=n(),x=r("pre"),m=n(),L=r("blockquote"),L.innerHTML="<p>$&gt; <code>crunch 4 4 0123456789 -o 4_numbers.txt</code></p>",W=n(),U(E.$$.fragment),C=n(),A=r("p"),A.innerHTML="Once we have created our extra wordlist (<code>4_numbers.txt</code>) we can run the attack with the <code>rockyou.txt</code> wordlist.",v=n(),$=r("p"),$.innerHTML="We will change use attack mode <code>-a 1</code> (combination attack).",y=n(),S=r("blockquote"),S.innerHTML="<p>$&gt; <code>hashcat -a 1 -m 1000 ntlm_rockyou2801.txt /usr/share/wordlists/rockyou.txt 4_numbers.txt</code></p>",D=n(),R=r("ul"),R.innerHTML=`<li><code>-a 3</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 1 (combination attack)</li> 
<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_rockyou2801.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The first part of the combination</li> 
<li><code>4_numbers.txt</code> - The second part of the combination</li>`,I=n(),U(O.$$.fragment),P=n(),F=r("p"),F.innerHTML="We can now see the password is <code>rockyou2801</code>",oe(x,"class","language-undefined")},m(d,l){t(d,o,l),t(d,f,l),t(d,c,l),t(d,u,l),t(d,w,l),t(d,b,l),t(d,_,l),t(d,k,l),t(d,h,l),t(d,T,l),t(d,x,l),x.innerHTML=M,t(d,m,l),t(d,L,l),t(d,W,l),X(E,d,l),t(d,C,l),t(d,A,l),t(d,v,l),t(d,$,l),t(d,y,l),t(d,S,l),t(d,D,l),t(d,R,l),t(d,I,l),X(O,d,l),t(d,P,l),t(d,F,l),g=!0},p:K,i(d){g||(j(E.$$.fragment,d),j(O.$$.fragment,d),g=!0)},o(d){z(E.$$.fragment,d),z(O.$$.fragment,d),g=!1},d(d){d&&e(o),d&&e(f),d&&e(c),d&&e(u),d&&e(w),d&&e(b),d&&e(_),d&&e(k),d&&e(h),d&&e(T),d&&e(x),d&&e(m),d&&e(L),d&&e(W),B(E,d),d&&e(C),d&&e(A),d&&e(v),d&&e($),d&&e(y),d&&e(S),d&&e(D),d&&e(R),d&&e(I),B(O,d),d&&e(P),d&&e(F)}}}class Ue extends G{constructor(o){super(),Y(this,o,null,ze,V,{})}}function Ke(s){let o,f,c;return{c(){o=r("table"),o.innerHTML=`<thead><tr><th align="left">Name</th> 
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
<td align="left"></td></tr></tbody>`,f=n(),c=r("p"),c.innerHTML="<em>*: Indicates that N starts at 0. For character positions other than 0-9 use A-Z (A=10)</em>"},m(u,w){t(u,o,w),t(u,f,w),t(u,c,w)},p:K,i:K,o:K,d(u){u&&e(o),u&&e(f),u&&e(c)}}}class Ze extends G{constructor(o){super(),Y(this,o,null,Ke,V,{})}}function Ve(s){let o,f,c,u,w,b,_,k,h,T,x,M,m,L,W,E,C,A,v,$,y,S,D,R,I,O,P,F,g,d,l,i,N,J,p,q,se,ae,Q,ue,ne,re;return _=new Ze({}),W=new Z({props:{path:"simplerule_head.cast",options:{rows:15,autoPlay:!1},loopDelay:0}}),y=new Z({props:{path:"simplerule_test.cast",options:{rows:15,autoPlay:!1},loopDelay:0}}),Q=new Z({props:{path:"simplerule_crack.cast"}}),{c(){o=r("h2"),o.textContent="Rules",f=n(),c=r("p"),c.textContent="Rules are a set of predefined rules which can perform mutations on a wordlist (e.g character to number substitutions, letter (de)capitalisation, character replacements). Each line is its own rule and will apply the rule to the password(s) supplied in a wordlist.",u=n(),w=r("p"),w.innerHTML='To understand the rules, we can review the <a href="https://hashcat.net/wiki/doku.php?id=rule_based_attack" rel="nofollow">Hashcat documentation</a>.',b=n(),U(_.$$.fragment),k=n(),h=r("hr"),T=n(),x=r("p"),x.innerHTML="We will use a sample wordlist <code>password.txt</code> which is text file containing the password <code>password</code>.",M=n(),m=r("p"),m.innerHTML="Consider the rule in <code>simplerule.rule</code>, we have some append rules, some capitalisation rules, and a substitution from <code>s</code> to <code>$</code>",L=n(),U(W.$$.fragment),E=n(),C=r("p"),C.innerHTML="Let’s run <code>simplerule.rule</code> and review the results",A=n(),v=r("blockquote"),v.innerHTML="<p>$&gt; <code>hashcat password.txt -r simplerule.rule --stdout</code></p>",$=n(),U(y.$$.fragment),S=n(),D=r("p"),D.innerHTML="Based on the rule <code>$1$2$2</code> (append <code>123</code> at the end of a password), we see a generated password <code>password123</code>.",R=n(),I=r("hr"),O=n(),P=r("p"),P.innerHTML="Let’s create a new rule list <code>labrule.rule</code>, with the rules",F=n(),g=r("ul"),g.innerHTML=`<li>Capitalise the first letter</li> 
<li>Replace <code>s</code> with <code>$</code></li> 
<li>Add <code>!</code> to the end of the password</li>`,d=n(),l=r("blockquote"),l.innerHTML="<p>Solution: <code>c:ss$:$!</code></p>",i=n(),N=r("hr"),J=n(),p=r("p"),p.innerHTML="Now let’s try out our new rule list <code>labrule.rule</code> against <code>rockyou.txt</code> to crack <code>simplerule_password.txt</code>",q=n(),se=r("blockquote"),se.innerHTML="<p>$&gt; <code>hashcat -m 1000 simplerule_password.txt /usr/share/wordlists/rockyou.txt -r labrule.rule</code></p>",ae=n(),U(Q.$$.fragment),ue=n(),ne=r("p"),ne.innerHTML="We can now see the password is <code>Friend$!</code>"},m(a,H){t(a,o,H),t(a,f,H),t(a,c,H),t(a,u,H),t(a,w,H),t(a,b,H),X(_,a,H),t(a,k,H),t(a,h,H),t(a,T,H),t(a,x,H),t(a,M,H),t(a,m,H),t(a,L,H),X(W,a,H),t(a,E,H),t(a,C,H),t(a,A,H),t(a,v,H),t(a,$,H),X(y,a,H),t(a,S,H),t(a,D,H),t(a,R,H),t(a,I,H),t(a,O,H),t(a,P,H),t(a,F,H),t(a,g,H),t(a,d,H),t(a,l,H),t(a,i,H),t(a,N,H),t(a,J,H),t(a,p,H),t(a,q,H),t(a,se,H),t(a,ae,H),X(Q,a,H),t(a,ue,H),t(a,ne,H),re=!0},p:K,i(a){re||(j(_.$$.fragment,a),j(W.$$.fragment,a),j(y.$$.fragment,a),j(Q.$$.fragment,a),re=!0)},o(a){z(_.$$.fragment,a),z(W.$$.fragment,a),z(y.$$.fragment,a),z(Q.$$.fragment,a),re=!1},d(a){a&&e(o),a&&e(f),a&&e(c),a&&e(u),a&&e(w),a&&e(b),B(_,a),a&&e(k),a&&e(h),a&&e(T),a&&e(x),a&&e(M),a&&e(m),a&&e(L),B(W,a),a&&e(E),a&&e(C),a&&e(A),a&&e(v),a&&e($),B(y,a),a&&e(S),a&&e(D),a&&e(R),a&&e(I),a&&e(O),a&&e(P),a&&e(F),a&&e(g),a&&e(d),a&&e(l),a&&e(i),a&&e(N),a&&e(J),a&&e(p),a&&e(q),a&&e(se),a&&e(ae),B(Q,a),a&&e(ue),a&&e(ne)}}}class Ye extends G{constructor(o){super(),Y(this,o,null,Ve,V,{})}}function Ge(s){let o,f,c,u,w,b,_;return{c(){o=r("hr"),f=n(),c=r("blockquote"),c.innerHTML="<h4>🔥 This completes the main section on password cracking 🔥</h4>",u=n(),w=r("p"),w.textContent="While we have spent the entire time focusing on cracking NTLM hashes, this type of hash would generally not be common during a forensic investigation.",b=n(),_=r("p"),_.innerHTML=`What is more common is breaking into password-protected ZIP files or Word documents, however the same principles apply.<br/>
We just need to change the <code>-m</code> flag to the correct hash format that we are trying to crack.`},m(k,h){t(k,o,h),t(k,f,h),t(k,c,h),t(k,u,h),t(k,w,h),t(k,b,h),t(k,_,h)},p:K,i:K,o:K,d(k){k&&e(o),k&&e(f),k&&e(c),k&&e(u),k&&e(w),k&&e(b),k&&e(_)}}}class Je extends G{constructor(o){super(),Y(this,o,null,Ge,V,{})}}function Qe(s){let o,f,c,u,w,b,_,k,h,T,x,M,m,L,W,E,C,A,v,$,y,S,D,R,I,O,P,F,g,d;return x=new Z({props:{path:"office2john_demo.cast"}}),D=new Z({props:{path:"office2john_prepare.cast"}}),g=new Z({props:{path:"office2john_crack.cast"}}),{c(){o=r("h2"),o.textContent="Cracking other hashes",f=n(),c=r("p"),c.textContent="In order to password crack a ZIP file or a Word document we need to first extract the password hash to be provided to Hashcat.",u=n(),w=r("p"),w.textContent="We will now learn how to extract a password from a password-protected Word document file.",b=n(),_=r("p"),_.innerHTML="The Python script <code>office2john.py</code> is supplied in this tutorial, but is also already available in Kali Linux.",k=n(),h=r("blockquote"),h.innerHTML="<p>$&gt; <code>office2john CTF_Forensic.docx &gt; CTF_Forensic.docx.hash</code></p>",T=n(),U(x.$$.fragment),M=n(),m=r("p"),m.innerHTML="If we review the hash, we can see the hash begins after the filename: <code>$office$*2013*...</code>",L=n(),W=r("p"),W.innerHTML='Looking at the <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">Hashcat documentation</a> for hash modes, we can see that we need to use <code>-m 9600</code> (MS Office 2013)',E=n(),C=r("table"),C.innerHTML=`<thead><tr><th align="center">Hash-Mode</th> 
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
<td align="left">…</td></tr></tbody>`,A=n(),v=r("hr"),$=n(),y=r("p"),y.innerHTML=`If you wondered what “john” means in <code>office2john</code>, this is referring to another hash-cracking tool called <a href="https://github.com/openwall/john" rel="nofollow">John the Ripper</a>.<br/>
Whilst both Hashcat and John the Ripper use the same hashes, the input format to provided to each tool is different. In order to crack the MS Office 2013 hash generated from the <code>office2john</code> tool in Hashcat, <strong>we must first remove the filename from the hash file</strong>.`,S=n(),U(D.$$.fragment),R=n(),I=r("p"),I.textContent="Now we can crack the hash",O=n(),P=r("blockquote"),P.innerHTML="<p>$&gt; <code>hashcat -m 9600 CTF_Forensic.docx.hash /usr/share/wordlists/rockyou.txt</code></p>",F=n(),U(g.$$.fragment)},m(l,i){t(l,o,i),t(l,f,i),t(l,c,i),t(l,u,i),t(l,w,i),t(l,b,i),t(l,_,i),t(l,k,i),t(l,h,i),t(l,T,i),X(x,l,i),t(l,M,i),t(l,m,i),t(l,L,i),t(l,W,i),t(l,E,i),t(l,C,i),t(l,A,i),t(l,v,i),t(l,$,i),t(l,y,i),t(l,S,i),X(D,l,i),t(l,R,i),t(l,I,i),t(l,O,i),t(l,P,i),t(l,F,i),X(g,l,i),d=!0},p:K,i(l){d||(j(x.$$.fragment,l),j(D.$$.fragment,l),j(g.$$.fragment,l),d=!0)},o(l){z(x.$$.fragment,l),z(D.$$.fragment,l),z(g.$$.fragment,l),d=!1},d(l){l&&e(o),l&&e(f),l&&e(c),l&&e(u),l&&e(w),l&&e(b),l&&e(_),l&&e(k),l&&e(h),l&&e(T),B(x,l),l&&e(M),l&&e(m),l&&e(L),l&&e(W),l&&e(E),l&&e(C),l&&e(A),l&&e(v),l&&e($),l&&e(y),l&&e(S),B(D,l),l&&e(R),l&&e(I),l&&e(O),l&&e(P),l&&e(F),B(g,l)}}}class et extends G{constructor(o){super(),Y(this,o,null,Qe,V,{})}}function tt(s){let o,f,c,u,w,b,_,k,h,T,x,M,m,L,W,E,C,A,v,$,y,S,D,R,I,O,P,F,g;return{c(){o=r("h2"),o.textContent="Exercises",f=n(),c=r("h3"),c.textContent="Exercise 1",u=n(),w=r("p"),w.textContent="Write a rule list that will",b=n(),_=r("ul"),_.innerHTML=`<li>Capitalise the first letter</li> 
<li>Append <code>1234</code> to the end</li> 
<li>Replace the letter <code>s</code> with <code>$</code></li> 
<li>Replace the letter <code>o</code> with <code>0</code></li>`,k=n(),h=r("p"),h.innerHTML="If the rules are written correctly, the rules applied on <code>password</code> should produce <code>Pa$$w0rd1234</code>",T=n(),x=r("h3"),x.textContent="Exercise 2",M=n(),m=r("blockquote"),m.innerHTML="<p>Crack this NTLM hash <code>B05564D517681DAB0FB8FA64CA97E7CB</code>.</p>",L=n(),W=r("p"),W.textContent="The password is made up (in order) of 1 capital letter, 2 lowercase letters, and 4 numbers.",E=n(),C=r("h3"),C.textContent="Exercise 3",A=n(),v=r("blockquote"),v.innerHTML="<p>Crack this NTLM hash <code>4A537119CEB6F51224DAD23D01CAA45C</code></p>",$=n(),y=r("p"),y.textContent="Hint: Have you been watching your lectures?",S=n(),D=r("h3"),D.textContent="Exercise 4 (Optional)",R=n(),I=r("blockquote"),I.innerHTML="<p>How secure is your own password? <strong>We don’t want your password, don’t submit this</strong></p>",O=n(),P=r("p"),P.innerHTML='Try and crack you own password using wordlist and/or rules, convert to any hash you want using <a href="https://codebeautify.org/ntlm-hash-generator" rel="nofollow">https://codebeautify.org/ntlm-hash-generator</a>',F=n(),g=r("p"),g.innerHTML='Perhaps try the pre-made rule list <a href="https://raw.githubusercontent.com/hashcat/hashcat/master/rules/rockyou-30000.rule" rel="nofollow"><code>rockyou-3000.rule</code></a>'},m(d,l){t(d,o,l),t(d,f,l),t(d,c,l),t(d,u,l),t(d,w,l),t(d,b,l),t(d,_,l),t(d,k,l),t(d,h,l),t(d,T,l),t(d,x,l),t(d,M,l),t(d,m,l),t(d,L,l),t(d,W,l),t(d,E,l),t(d,C,l),t(d,A,l),t(d,v,l),t(d,$,l),t(d,y,l),t(d,S,l),t(d,D,l),t(d,R,l),t(d,I,l),t(d,O,l),t(d,P,l),t(d,F,l),t(d,g,l)},p:K,i:K,o:K,d(d){d&&e(o),d&&e(f),d&&e(c),d&&e(u),d&&e(w),d&&e(b),d&&e(_),d&&e(k),d&&e(h),d&&e(T),d&&e(x),d&&e(M),d&&e(m),d&&e(L),d&&e(W),d&&e(E),d&&e(C),d&&e(A),d&&e(v),d&&e($),d&&e(y),d&&e(S),d&&e(D),d&&e(R),d&&e(I),d&&e(O),d&&e(P),d&&e(F),d&&e(g)}}}class lt extends G{constructor(o){super(),Y(this,o,null,tt,V,{})}}function ot(s){let o,f,c,u=`<code class="language-undefined">Version: 1.0 (20230611)
Maintainer: Andrew Wong (andrew.j.wong@unsw.edu.au)</code>`,w,b,_='<code class="language-undefined">Special thanks to Wesley Lacy for creating the activity resources</code>',k,h,T,x,M,m,L,W,E,C,A,v,$,y,S,D,R,I,O,P,F,g,d;return m=new Oe({}),W=new Re({}),C=new je({}),v=new Be({}),y=new Ue({}),D=new Ye({}),I=new Je({}),P=new et({}),g=new lt({}),{c(){o=r("h1"),o.textContent="COMP6845 | Password Cracking",f=n(),c=r("pre"),w=n(),b=r("pre"),k=n(),h=r("p"),h.textContent="In this lab, we will use a combination of scripts to extract password hashes from files and various attacks to crack the password.",T=n(),x=r("hr"),M=n(),U(m.$$.fragment),L=n(),U(W.$$.fragment),E=n(),U(C.$$.fragment),A=n(),U(v.$$.fragment),$=n(),U(y.$$.fragment),S=n(),U(D.$$.fragment),R=n(),U(I.$$.fragment),O=n(),U(P.$$.fragment),F=n(),U(g.$$.fragment),oe(c,"class","language-undefined"),oe(b,"class","language-undefined")},m(l,i){t(l,o,i),t(l,f,i),t(l,c,i),c.innerHTML=u,t(l,w,i),t(l,b,i),b.innerHTML=_,t(l,k,i),t(l,h,i),t(l,T,i),t(l,x,i),t(l,M,i),X(m,l,i),t(l,L,i),X(W,l,i),t(l,E,i),X(C,l,i),t(l,A,i),X(v,l,i),t(l,$,i),X(y,l,i),t(l,S,i),X(D,l,i),t(l,R,i),X(I,l,i),t(l,O,i),X(P,l,i),t(l,F,i),X(g,l,i),d=!0},p:K,i(l){d||(j(m.$$.fragment,l),j(W.$$.fragment,l),j(C.$$.fragment,l),j(v.$$.fragment,l),j(y.$$.fragment,l),j(D.$$.fragment,l),j(I.$$.fragment,l),j(P.$$.fragment,l),j(g.$$.fragment,l),d=!0)},o(l){z(m.$$.fragment,l),z(W.$$.fragment,l),z(C.$$.fragment,l),z(v.$$.fragment,l),z(y.$$.fragment,l),z(D.$$.fragment,l),z(I.$$.fragment,l),z(P.$$.fragment,l),z(g.$$.fragment,l),d=!1},d(l){l&&e(o),l&&e(f),l&&e(c),l&&e(w),l&&e(b),l&&e(k),l&&e(h),l&&e(T),l&&e(x),l&&e(M),B(m,l),l&&e(L),B(W,l),l&&e(E),B(C,l),l&&e(A),B(v,l),l&&e($),B(y,l),l&&e(S),B(D,l),l&&e(R),B(I,l),l&&e(O),B(P,l),l&&e(F),B(g,l)}}}function dt(s){return _e(()=>{document.querySelectorAll("blockquote").forEach(o=>{o.textContent.startsWith("$> ")&&o.style.setProperty("--leftLineColour","#21b0d7")})}),[]}class it extends G{constructor(o){super(),Y(this,o,dt,ot,V,{})}}function st(s){let o,f,c;return f=new it({}),{c(){o=r("main"),U(f.$$.fragment)},m(u,w){t(u,o,w),X(f,o,null),c=!0},p:K,i(u){c||(j(f.$$.fragment,u),c=!0)},o(u){z(f.$$.fragment,u),c=!1},d(u){u&&e(o),B(f)}}}class nt extends G{constructor(o){super(),Y(this,o,null,st,V,{})}}new nt({target:document.getElementById("app")});

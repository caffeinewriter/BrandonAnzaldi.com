{{{ "title" : "Bitcoin Transaction Malleability In Plain English",
"tags" : [ "technology", "bitcoin" ], "category" : "technology", "date"
: "2-11-2014" }}}

The title of this was derived from [Coding In My
Sleep](http://codinginmysleep.com)'s \*In Plain English\* series, namely
because it sounds nicer than \*Mt. Gox is a lying sack of shit\*.

Here's what happened, basically. Mt. Gox used something pretty simple to
validate transactions. Transaction IDs. Seems like a foolproof strategy,
right? Since each one is cryptographically signed, and impossible\\\* to
counterfit. (Impossible meaning infeasible considering it'd
statistically take more work to forge a Bitcoin transaction than it
would to mine a comparable amount of Bitcoins, several times over.) Now
here's the problem. It's possible to modify transaction ids by modifying
non-essential values, thus changing the cryptographic signature that is
the txid. The user could then ask Mt. Gox to credit them, since the
transaction was clearly in the Blockchain, and then get credited again
by the modified transaction posting. Let's put that into plain English.

The user has two envelopes, both with copies of a check for \$100. The
user sends these checks to the post office, and they're each given
unique IDs. Along with those, there's a form filled out, denoting that
each envelope is depositing \$100 into the account over at Gox. Easy
enough. They're received, and someone notices that even though the form
says \$100, that the checks have the exact same number, which in the
case of the actual attack, would mean someone is spending the same input
twice, or spending money once, then trying to spend it again, even
though they no longer have control over it. So one just doesn't post,
while the other one is sent to process. Well now, our "frustrated"
customer calls up customer service, demanding to know why their deposit
hasn't posted, and gives them the ID of the envelope that hasn't
successfully processed. The customer service person then takes the
order, and sees that there's a \$100 check inside that hasn't been
processed for some reason, and then credits the customer \$100, doubling
the customers money.

The only reason why this affected Mt. Gox, is because they neglected to
check the inputs as well as the transaction before crediting money to
their users accounts. It's similar to the infamous double spend attack,
though much easier to pull off. Now, Mt. Gox being the already
wonderfully honest, well loved business that it is, promptly decided to
point the finger at the Bitcoin protocol as being horrendously flawed,
even though the mitigation technique is elementary security. Just, check
the numbers on the check so to speak. They also touted it as an unknown
and new, disruptive vulnerability, while in reality, it's been
documented on
[BitcoinTalk](https://bitcointalk.org/index.php?topic=8392.msg122410\#msg122410)
since 2011, and it was added to the wiki \*[over a year
ago](https://en.bitcoin.it/wiki/Transaction\_Malleability)\*. When a
company thrives on its security, you'd think they'd keep up on these
things, but not Mt. Gox. Sure, an oversight would be understandable, but
Mt. Gox was allowing its users to rob it, over and over again. [Possibly
to the point of
insolvency](http://www.wired.com/wiredenterprise/2013/11/mtgox/all/).
Now they've suspended withdrawals, that just lends credibility to the
rumors of insolvency.

In conclusion, Mt. Gox failed to take basic security precautions, and
then proceeded to try and shift the blame to Bitcoin itself, to take the
spotlight off of Gox's already spotty track record.
